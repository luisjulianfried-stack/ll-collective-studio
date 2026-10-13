// Rendert story.html zu Story-Bildern (PNG) und einem animierten Story-Video (MP4, 1080×1920).
// Aufruf: NODE_PATH=$(npm root -g) node render.cjs   (benötigt Playwright + ffmpeg)
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..');
const SLIDES = 6, FPS = 30, SECONDS = [4.2, 5, 5, 5, 5, 5], FADE = 0.5;
const url = s => `file://${__dirname}/story.html?s=${s}`;
const seek = (page, t) => page.evaluate(ms => { for (const a of document.getAnimations()) { a.pause(); a.currentTime = ms; } }, t);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  const tmp = fs.mkdtempSync(path.join(require('os').tmpdir(), 'story-'));
  for (let s = 0; s < SLIDES; s++) {
    await page.goto(url(s));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState('networkidle');
    // Standbild: Endzustand, im Handy die Startansicht der Website
    await seek(page, 10000);
    await page.addStyleTag({ content: '.screen .s2{display:none}' });
    await page.screenshot({ path: `${OUT}/story-${s + 1}.png` });
    await page.reload(); await page.evaluate(() => document.fonts.ready);
    // Video-Segment Bild für Bild
    const file = `${tmp}/seg${s}.mp4`;
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', file]);
    const frames = Math.round(SECONDS[s] * FPS);
    for (let f = 0; f < frames; f++) {
      await seek(page, (f / FPS) * 1000);
      const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    ff.stdin.end();
    await new Promise(r => ff.on('close', r));
    console.log('Slide', s + 1, 'fertig');
  }
  await browser.close();

  // Segmente mit weichen Überblendungen zusammensetzen
  const inputs = [], filters = [];
  let offset = 0, last = '[0:v]';
  for (let s = 0; s < SLIDES; s++) inputs.push('-i', `${tmp}/seg${s}.mp4`);
  for (let s = 1; s < SLIDES; s++) {
    offset += SECONDS[s - 1] - FADE;
    const out = s === SLIDES - 1 ? '[v]' : `[x${s}]`;
    filters.push(`${last}[${s}:v]xfade=transition=fade:duration=${FADE}:offset=${offset.toFixed(2)}${out}`);
    last = out;
  }
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', filters.join(';'), '-map', '[v]', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '19', '-movflags', '+faststart', `${OUT}/story.mp4`]);
  fs.rmSync(tmp, { recursive: true });
  console.log('story.mp4 fertig');
})();
