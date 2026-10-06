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
    title: 'Villa Serena – Architektur',
    category: 'WEBDESIGN & ARCHITEKTUR',
    chromeLabel: 'VILLA SERENA / KONZEPT-DEMO',
    demoUrl: '/showcase/architektur/',
    preview: '/showcase/architektur-preview.webp',
    previewAlt: 'Startseite der Architektur-Website „Villa Serena“: Villa mit Pool und der Headline „Räume für ein Leben mit Anspruch.“',
    features: ['Hausführung', 'Grundriss', 'Materialien'],
    note: 'Konzept-Demo von LL Collective Studio für das fiktive Architektur- und Bauunternehmen Villa Serena. Visualisierungen und Inhalte sind Beispiele, kein Kundenprojekt.',
  },
  {
    slug: 'lematcha',
    title: 'LeMatcha – Matcha Limonade',
    category: 'BRANDING & PRODUKT',
    chromeLabel: 'LEMATCHA / KONZEPT-DEMO',
    demoUrl: '/showcase/lematcha/',
    preview: '/showcase/lematcha-preview.webp',
    previewAlt: 'Startseite der Produkt-Website „LeMatcha“: dunkelgrüner Hero mit Seidenschimmer und Matcha-Limonade in der Glasdose.',
    features: ['Markenauftritt', 'Scroll-Animation', 'Mobil optimiert'],
    note: 'Konzept-Demo von LL Collective Studio für die fiktive Getränkemarke LeMatcha. Produkt, Sorten und Preise sind Beispiele, die Vorbestellung speichert nichts – kein Kundenprojekt.',
  },
  {
    slug: 'cafe-still',
    title: 'Café Still – Espresso-Bar',
    category: 'WEBDESIGN & GASTRONOMIE',
    chromeLabel: 'CAFÉ STILL / KONZEPT-DEMO',
    demoUrl: '/showcase/cafe-still/',
    preview: '/showcase/cafe-still-preview.webp',
    previewAlt: 'Startseite der Café-Website „Café Still“: Cappuccino mit Croissant und die Headline „Ein guter Kaffee. Ein bisschen Zeit.“',
    features: ['Speisekarte', 'Bildwelt', 'Mobil optimiert'],
    note: 'Konzept-Demo von LL Collective Studio für das fiktive Café Still. Die Bilder sind KI-generierte Visualisierungen, Karte und Preise sind Beispiele, kein Kundenprojekt.',
  },
  {
    slug: 'casa-oliva',
    title: 'Casa Oliva – Ristorante',
    category: 'WEBDESIGN & GASTRONOMIE',
    chromeLabel: 'CASA OLIVA / KONZEPT-DEMO',
    demoUrl: '/showcase/casa-oliva/',
    preview: '/showcase/casa-oliva-preview.webp',
    previewAlt: 'Startseite der Restaurant-Website „Casa Oliva“: Pasta-Teller und die Headline „Gute Abende beginnen bei Tisch.“',
    features: ['Speisekarte', 'Atmosphäre', 'Mobil optimiert'],
    note: 'Konzept-Demo von LL Collective Studio für das fiktive italienische Restaurant Casa Oliva. Die Bilder sind KI-generierte Visualisierungen, Speisen und Preise sind Beispiele, kein Kundenprojekt.',
  },
];
