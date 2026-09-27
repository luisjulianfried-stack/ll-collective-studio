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
  {
    slug: 'formwerk',
    title: 'Form / Werk – Schreinerei',
    category: 'WEBDESIGN & HANDWERK',
    chromeLabel: 'FORM / WERK / KONZEPT-DEMO',
    demoUrl: '/showcase/formwerk/',
    preview: '/showcase/formwerk-preview.webp',
    previewAlt: 'Startseite der Schreinerei-Website „Form / Werk“: Küche aus Eiche und Stein und die Headline „Gutes Handwerk. Passt ins Leben.“',
    features: ['Arbeiten', 'Ablauf', 'Mobil optimiert'],
    note: 'Konzept-Demo von LL Collective Studio für die fiktive Schreinerei Form / Werk. Die Bilder sind KI-generierte Visualisierungen, keine Referenzen eines realen Betriebs, kein Kundenprojekt.',
  },
  {
    slug: 'atelier-strand',
    title: 'Atelier Strand – Friseursalon',
    category: 'WEBDESIGN & BEAUTY',
    chromeLabel: 'ATELIER STRAND / KONZEPT-DEMO',
    demoUrl: '/showcase/atelier-strand/',
    preview: '/showcase/atelier-strand-preview.webp',
    previewAlt: 'Startseite der Friseursalon-Website „Atelier Strand“: Porträts mit natürlichen Wellen und die Headline „Ihr Haar. Ihr Stil. Ganz Sie.“',
    features: ['Preisliste', 'Looks', 'Terminvorschau'],
    note: 'Konzept-Demo von LL Collective Studio für den fiktiven Friseursalon Atelier Strand. Die Bilder sind KI-generierte Visualisierungen, Preise beispielhaft, die Terminauswahl bucht nichts – kein Kundenprojekt.',
  },
];
