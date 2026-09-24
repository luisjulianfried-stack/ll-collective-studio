export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/impressum', '/datenschutz'].map(path => ({ url: `${site.url}${path}`, lastModified: new Date() })); }
