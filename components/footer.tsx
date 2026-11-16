import Link from 'next/link';
import { site } from '@/lib/site';
import { BrandMark } from '@/components/brand-mark';

export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand"><BrandMark large/><p>Marketing, das <em>wirkt.</em></p></div>
      <nav className="footer-links" aria-label="Footer">
        <div><span>Studio</span><Link href="/#services">Leistungen</Link><Link href="/#work">Projekte</Link><Link href="/#about">Über uns</Link><Link href="/#contact">Kontakt</Link></div>
        <div><span>Folgen</span>{site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}<a href={`mailto:${site.email}`}>E-Mail</a></div>
        <div><span>Rechtliches</span><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
      </nav>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} LL Collective Studio</span><span>München · Deutschland</span><Link href="/#top">Nach oben ↑</Link></div>
  </footer>;
}
