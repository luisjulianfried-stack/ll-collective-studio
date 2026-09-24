import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BrandMark } from '@/components/brand-mark';
export default function NotFound() { return <main className="not-found"><Link className="brand" href="/"><BrandMark/><span className="brand-name">COLLECTIVE<br/>STUDIO</span></Link><div><span className="eyebrow">ERROR / 404</span><h1>Lost in<br/><em>direction.</em></h1><p>Diese Seite gibt es nicht. Zurück zu den guten Ideen.</p><Link href="/" className="pill-button light">ZUR STARTSEITE <ArrowUpRight size={18}/></Link></div><span className="eyebrow">LL COLLECTIVE STUDIO / MUNICH</span></main>; }
