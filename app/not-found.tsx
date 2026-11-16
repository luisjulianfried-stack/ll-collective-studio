import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BrandMark } from '@/components/brand-mark';
export default function NotFound() { return <main className="not-found"><Link className="brand" href="/" aria-label="LL Collective Studio, Startseite"><BrandMark/><span className="brand-name">Collective Studio</span></Link><div><span className="eyebrow">Fehler · 404</span><h1>Lost in<br/><em>direction.</em></h1><p>Diese Seite gibt es nicht. Zurück zu den guten Ideen.</p><Link href="/" className="btn btn-dark">Zur Startseite <ArrowUpRight size={16} strokeWidth={1.5}/></Link></div><span className="eyebrow">LL Collective Studio · München</span></main>; }
