// Rendert carousel.html zu Instagram-Karussell-Bildern (1080×1350, 4:5).
// Aufruf: NODE_PATH=$(npm root -g) node render-carousel.cjs   (vorher render.cjs, da Slide 6 die Story-Bilder zeigt)
const { chromium } = require('playwright');
const path = require('path');
const OUT = path.join(__dirname, '..', 'carousel');
require('fs').mkdirSync(OUT, { recursive: true });
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  for (let s = 0; s < 8; s++) {
    await page.goto(`file://${__dirname}/carousel.html?s=${s}`);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: `${OUT}/carousel-${s + 1}.png` });
  }
  await browser.close();
})();
