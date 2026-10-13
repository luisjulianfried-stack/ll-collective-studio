// Nimmt mobile Screenshots der Showcase-Demos auf (Startansicht + eine Bildschirmhöhe tiefer).
// Vorher public/ statisch ausliefern: python3 -m http.server 8765 --directory public
const { chromium } = require('playwright');
const slugs = ['architektur', 'lematcha', 'cafe-still', 'casa-oliva'];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  for (const s of slugs) {
    await page.goto(`http://localhost:8765/showcase/${s}/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `${__dirname}/shots/${s}-1.jpg`, quality: 90 });
    await page.evaluate(() => window.scrollTo(0, 844));
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `${__dirname}/shots/${s}-2.jpg`, quality: 90 });
  }
  await browser.close();
})();
