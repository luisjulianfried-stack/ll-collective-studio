export const site = {
  name: 'LL Collective Studio', location: 'Munich / Germany',
  email: 'LLCollectiveStudio@gmail.com', instagram: 'https://www.instagram.com/ll_collective_studio/', linkedin: '',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ll-collective-studio.de',
};

export const showcases = [
  { number: '01', outputTitle: 'Brand Identity', title: 'Brand Identity', category: 'BRAND STRATEGY & IDENTITY', tone: 'amber', visual: 'identity' },
  { number: '02', outputTitle: 'Social Media System', title: 'Social Media System', category: 'SOCIAL MEDIA & CONTENT', tone: 'silver', visual: 'social' },
  { number: '03', outputTitle: 'Website', title: 'Website', category: 'WEBDESIGN & DIGITAL', tone: 'blue', visual: 'web' },
  { number: '04', outputTitle: 'Campaign', title: 'Campaign', category: 'CAMPAIGNS & EXPERIENCES', tone: 'violet', visual: 'campaign' },
  { number: '05', outputTitle: 'Event Communication', title: 'Event Communication', category: 'CAMPAIGNS & EXPERIENCES', tone: 'olive', visual: 'event' },
] as const;
