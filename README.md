# LL Collective Studio – private Vorschau

Eigenständige Website für LL Collective Studio. Die Showcase-Fläche „Ideas become Identity“ zeigt Beispielprojekte. Konzept-Demos für fiktive Unternehmen sind als solche gekennzeichnet.

## Lokal

```bash
npm install
npm run dev
```

`npm run build` erstellt die statische Vorschau in `out/`. Das Kontaktangebot nutzt die angegebene E-Mail-Adresse. Ein Formularversand ist nicht Teil dieser Vorschau.

## Struktur

- `app/page.tsx`: Startseite
- `components/project-gallery.tsx`: Galerie der Beispielprojekte
- `components/services.tsx`, `growth.tsx`, `motion.tsx`, `brand-mark.tsx`: Leistungen, Interaktionen und Monogramm
- `lib/site.ts`: E-Mail-Adresse und Inhalte
- `lib/showcases.ts`: Beispielprojekte bei „Ideas become Identity“ (neues Projekt: Ordner unter `public/showcase/<slug>/`, Vorschaubild `public/showcase/<slug>-preview.webp`, Eintrag hier ergänzen)
- `components/website-showcase.tsx`: Projektkarte mit Vollbild-Overlay der Live-Demo
- `public/showcase/architektur/`: eigenständige Konzept-Demo einer Architektur-Website aus dem ChatGPT-Projekt (statisch, `noindex`, Pfade auf `/showcase/architektur` angepasst über `window.SITE_BASE`)
- `app/impressum`, `app/datenschutz`: rechtliche Entwürfe
- `app/globals.css`: Gestaltung, responsive Regeln und Animationen

## Vor öffentlicher Freigabe

Das Impressum enthält die angegebenen Namen, Kontaktanschrift, Telefonnummern und E-Mail-Adresse. Die Datenschutzerklärung ist noch ein Entwurf: Angaben zum tatsächlich genutzten Hosting, zur Rechtsgrundlage und zur Speicherdauer müssen vor der öffentlichen Freigabe geprüft und ergänzt werden. Echte Arbeitsproben können später ergänzt werden, sobald ihre Veröffentlichung freigegeben ist.
