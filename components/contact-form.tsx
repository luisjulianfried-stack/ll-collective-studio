'use client';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

const topics = ['Strategie', 'Social Media & Content', 'Kampagnen', 'Webdesign & Branding', 'Noch offen / Sonstiges'];

type Status = 'idle' | 'sending' | 'sent' | 'error';

// Anfragen gehen über Web3Forms (https://web3forms.com) direkt an das Studio-Postfach.
// Solange kein Access Key in lib/site.ts steht, öffnet das Formular stattdessen das E-Mail-Programm.
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const topic = String(data.get('topic') || '');
    const subject = `Neue Anfrage über die Website: ${name}${topic ? ` (${topic})` : ''}`;

    if (!site.web3formsKey) {
      const body = ['Name', 'E-Mail', 'Unternehmen', 'Anliegen', 'Nachricht']
        .map((label, i) => `${label}: ${data.get(['name', 'email', 'company', 'topic', 'message'][i]) || '–'}`).join('\n');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject,
          from_name: 'LL Collective Studio Website',
          name,
          email: data.get('email'),
          Unternehmen: data.get('company') || '–',
          Anliegen: topic || '–',
          message: data.get('message'),
          botcheck: data.get('botcheck') ? true : '',
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') return <div className="cf-done" role="status">
    <strong>Danke für Ihre Nachricht!</strong>
    <p>Ihre Anfrage ist bei uns angekommen. Wir melden uns in der Regel innerhalb von ein bis zwei Werktagen.</p>
    <button type="button" className="cf-link" onClick={() => setStatus('idle')}>Weitere Nachricht senden</button>
  </div>;

  return <form className="cf" onSubmit={submit}>
    <div className="cf-row">
      <label>NAME *<input name="name" autoComplete="name" required maxLength={120}/></label>
      <label>E-MAIL *<input name="email" type="email" autoComplete="email" required maxLength={160}/></label>
    </div>
    <div className="cf-row">
      <label>UNTERNEHMEN<input name="company" autoComplete="organization" maxLength={160}/></label>
      <label>ANLIEGEN<select name="topic" defaultValue=""><option value="">Bitte wählen</option>{topics.map(t => <option key={t}>{t}</option>)}</select></label>
    </div>
    <label>NACHRICHT *<textarea name="message" rows={5} required maxLength={5000} placeholder="Worum geht es, und bis wann soll es fertig sein?"/></label>
    <input type="checkbox" name="botcheck" className="cf-trap" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <label className="cf-check"><input type="checkbox" required/><span>Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden. *</span></label>
    <div className="cf-bottom">
      <button className="pill-button dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'WIRD GESENDET …' : 'ANFRAGE SENDEN'} <ArrowUpRight size={18}/></button>
      <p className="cf-status" role="alert">{status === 'error' && <>Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie direkt an <a href={`mailto:${site.email}`}>{site.email}</a>.</>}</p>
    </div>
  </form>;
}
