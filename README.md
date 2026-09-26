# LL Collective Studio – private Vorschau

Eigenständige Website für LL Collective Studio. Die Showcase-Fläche beschreibt mögliche Leistungen und Ergebnisse. Sie enthält keine fiktiven Referenzprojekte.

## Lokal

```bash
npm install
npm run dev
```

`npm run build` erstellt die statische Vorschau in `out/`. Das Kontaktangebot nutzt die angegebene E-Mail-Adresse. Ein Formularversand ist nicht Teil dieser Vorschau.

## Struktur

- `app/page.tsx`: Startseite
- `components/project-gallery.tsx`: interaktive Leistungsbeispiele
- `components/services.tsx`, `growth.tsx`, `motion.tsx`, `brand-mark.tsx`: Leistungen, Interaktionen und Monogramm
- `lib/site.ts`: E-Mail-Adresse und Inhalte
- `app/impressum`, `app/datenschutz`: rechtliche Entwürfe
- `app/globals.css`: Gestaltung, responsive Regeln und Animationen

## Vor öffentlicher Freigabe

Das Impressum enthält die angegebenen Namen, Kontaktanschrift, Telefonnummern und E-Mail-Adresse. Die Datenschutzerklärung ist noch ein Entwurf: Angaben zum tatsächlich genutzten Hosting, zur Rechtsgrundlage und zur Speicherdauer müssen vor der öffentlichen Freigabe geprüft und ergänzt werden. Echte Arbeitsproben können später ergänzt werden, sobald ihre Veröffentlichung freigegeben ist.
