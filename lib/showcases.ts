/**
 * Beispielprojekte für „Ideas become Identity“.
 * Neues Projekt: statische Website nach public/showcase/<slug>/ legen,
 * Vorschaubild nach public/showcase/<slug>-preview.webp und hier einen Eintrag ergänzen.
 */
export type ShowcaseProject = {
  slug: string;
  title: string;
  category: string;
  chromeLabel: string;
  demoUrl: string;
  preview: string;
  previewAlt: string;
  features: string[];
  note: string;
};

export const showcases: ShowcaseProject[] = [
  {
    slug: 'architektur',
    title: 'Architektur-Website',
    category: 'WEBDESIGN & DIGITAL',
    chromeLabel: 'ARCHITEKTUR-WEBSITE / KONZEPT-DEMO',
    demoUrl: '/showcase/architektur/',
    preview: '/showcase/architektur-preview.webp',
    previewAlt: 'Startseite der Architektur-Website: Villa mit Pool und der Headline „Räume für ein Leben mit Anspruch.“',
    features: ['Hausführung', 'Grundriss', 'Materialien'],
    note: 'Konzept-Demo von LL Collective Studio für ein fiktives Architektur- und Bauunternehmen. Visualisierungen und Inhalte sind Beispiele, kein Kundenprojekt.',
  },
];
