import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/' } };
import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { ProjectGallery } from '@/components/project-gallery';
import { Services } from '@/components/services';
import { SystemMark } from '@/components/system-mark';
import { site } from '@/lib/site';
import { Motion } from '@/components/motion';
import { Footer } from '@/components/footer';

export default function Home() {
  return <><Navigation/><main>
    <section className="hero hero-v2" id="top">
      <div className="hero-atmosphere" aria-hidden="true"><div className="hero-orb"/></div>
      <div className="hero-chrome" aria-hidden="true"><SystemMark/></div>
      <div className="hero-meta"><span>INDEPENDENT CREATIVE STUDIO</span><span>MUNICH / GERMANY</span></div>
      <div className="hero-body">
        <p className="hero-kicker"><Asterisk size={18}/> STRATEGY · BRANDING · CONTENT · DIGITAL</p>
        <h1>BUILT TO BE<br/><span><em>remembered.</em></span></h1>
        <div className="hero-bottom hero-bottom-v2">
          <p>Strategie, Branding, Content und digitale Auftritte für Unternehmen, die sichtbar wachsen wollen.</p>
          <div className="hero-actions">
            <a className="pill-button light" href="#contact">PROJEKT STARTEN <ArrowUpRight size={16}/></a>
            <a className="pill-button outline" href="#services">LEISTUNGEN ANSEHEN <ArrowDown size={16}/></a>
          </div>
        </div>
      </div>
      <div className="hero-foot"><span>LL COLLECTIVE STUDIO © {new Date().getFullYear()}</span><span>INDEPENDENT CREATIVE STUDIO</span><span>01 / 06</span></div>
    </section>

    <Services/>
    <ProjectGallery/>

    <section id="about" className="about-section section-pad about-v2">
      <div className="about-heading reveal"><span className="eyebrow">ABOUT THE STUDIO</span><h2>TWO PERSPECTIVES.<br/><em>ONE COLLECTIVE.</em></h2></div>
      <div className="about-content">
        <div className="about-visual reveal"><div className="about-visual-top"><span>LL COLLECTIVE</span><span>MUNICH / GERMANY</span></div><SystemMark/><div className="about-visual-caption">STRATEGY / DESIGN / CONTENT / DIGITAL</div></div>
        <div className="about-copy reveal">
          <p>LL Collective Studio verbindet strategisches Marketing mit moderner visueller Gestaltung.</p>
          <p>Gegründet von Luis Fried und Leander Ballhausen in München entwickeln wir Marken nicht in einzelnen Maßnahmen, sondern als zusammenhängenden Auftritt.</p>
          <div className="about-principles"><span>Strategie gibt die Richtung.</span><span>Design schafft Wiedererkennung.</span><span>Content bringt die Marke nach außen.</span></div>
          <div className="founders"><div><span>CO-FOUNDER</span><strong>Luis Fried</strong></div><div><span>CO-FOUNDER</span><strong>Leander Ballhausen</strong></div></div>
        </div>
      </div>
    </section>

    <section id="process" className="process-section section-pad process-v2">
      <div className="section-heading reveal"><div><span className="eyebrow">HOW WE WORK</span><h2>FROM FIRST THOUGHT<br/>TO <em>FINAL IMPACT.</em></h2></div></div>
      <div className="process-list">
        {[
          ['01','DISCOVER','Wir verstehen Unternehmen, Zielgruppe und Ziel.'],
          ['02','DIRECTION','Wir definieren Positionierung, Strategie und kreative Richtung.'],
          ['03','CREATE','Wir entwickeln Identität, Content, Website oder Kampagne.'],
          ['04','LAUNCH & GROW','Wir veröffentlichen, messen und entwickeln weiter.']
        ].map(([n,title,desc]) => <div className="process-row reveal" key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight size={20} strokeWidth={1}/></div>)}
      </div>
    </section>

    <section id="contact" className="contact-section section-pad contact-v2">
      <div className="contact-intro reveal"><span className="eyebrow">START A PROJECT</span><h2>HAVE SOMETHING<br/><em>IN MIND?</em></h2><p className="contact-tagline">Let’s make it matter.</p></div>
      <div className="contact-invite reveal">
        <a className="pill-button light contact-cta" href={`mailto:${site.email}`}>PROJEKT STARTEN <ArrowUpRight size={18}/></a>
        <div className="contact-details"><span>DIREKTER KONTAKT</span><a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a><span>MUNICH / GERMANY</span></div>
      </div>
    </section>
  </main><Footer/><Motion/></>;
}