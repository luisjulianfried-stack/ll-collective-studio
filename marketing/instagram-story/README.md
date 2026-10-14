# Instagram-Story: Projekte

Story (1080×1920) aus den Showcase-Projekten in `lib/showcases.ts`.

- `story-1.png` … `story-6.png`: Einzelbilder (Intro, 4 Projekte, Kontakt)
- `story.mp4`: animierte Version (~22 s, mit Laufbändern, Stickern und wechselnden Übergängen)

## Neu erzeugen

```bash
python3 -m http.server 8765 --directory public &      # Demos ausliefern
NODE_PATH=$(npm root -g) node marketing/instagram-story/src/shoot.cjs   # Handy-Screenshots
NODE_PATH=$(npm root -g) node marketing/instagram-story/src/render.cjs  # PNGs + MP4
```

Texte und Farben stehen in `src/story.html`. Schriften: Gelasio (liegt bei, OFL) und Inter Display Black (muss lokal installiert sein).
