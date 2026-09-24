import Link from 'next/link';
import { site } from '@/lib/site';
import { BrandMark } from '@/components/brand-mark';

export function Footer() {
  return <footer className="footer footer-v2">
    <div className="footer-v2-brand"><BrandMark large/><div><strong>LL COLLECTIVE STUDIO</strong><span>Independent Creative Studio — Munich</span></div></div>
    <div className="footer-v2-links">
      <div>{site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}</div>
      <div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} LL COLLECTIVE STUDIO</span><span>MUNICH / GERMANY</span><Link href="/#top">BACK TO TOP ↑</Link></div>
  </footer>;
}