import Link from 'next/link';
import { site } from '@/lib/site';
import { BrandMark } from '@/components/brand-mark';

export function Footer() {
  return <footer className="footer footer-v2">
    <div className="footer-v2-brand"><BrandMark large/><div><strong>LL COLLECTIVE STUDIO</strong><span>Marketing & Webdesign — München</span></div></div>
    <nav className="footer-v2-links" aria-label="Fußzeilen-Navigation">
      <div>{site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">Instagram<span className="sr-only"> (öffnet in neuem Tab)</span></a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (öffnet in neuem Tab)</span></a>}</div>
      <div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
    </nav>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} LL COLLECTIVE STUDIO</span><span>MÜNCHEN / DEUTSCHLAND</span><Link href="/#top" lang="en">BACK TO TOP <span aria-hidden="true">↑</span></Link></div>
  </footer>;
}