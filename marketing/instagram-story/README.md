# Instagram: Story & Moodboard-Karussell

Aus den Showcase-Projekten in `lib/showcases.ts`.

- `story-1.png` … `story-6.png`, `story.mp4`: Story (1080×1920, 9:16, ~22 s)
- `carousel/carousel-1.png` … `carousel-8.png`: Feed-Karussell „Moodboard & Story“ (1080×1350, 4:5)
- `caption.txt`: Caption mit Hashtags und Hinweise zum Posten

## Neu erzeugen

```bash
python3 -m http.server 8765 --directory public &                               # Demos ausliefern
NODE_PATH=$(npm root -g) node marketing/instagram-story/src/shoot.cjs           # Handy-Screenshots
NODE_PATH=$(npm root -g) node marketing/instagram-story/src/render.cjs          # Story: PNGs + MP4
NODE_PATH=$(npm root -g) node marketing/instagram-story/src/render-carousel.cjs # Karussell
```

Texte und Farben stehen in `src/story.html` und `src/carousel.html`. Schriften: Gelasio (liegt bei, OFL) und Inter Display Black (muss lokal installiert sein).
