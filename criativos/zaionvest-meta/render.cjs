// Renderiza cada frame do creative.html em PNG pronto para o Gerenciador de Anúncios.
// uso: node render.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, 'export');
const IDS = [
  'a-feed-1080x1350',
  'b-story-1080x1920',
  'c-square-1080x1080',
  'd-carrossel-01',
  'd-carrossel-02',
  'd-carrossel-03',
  'd-carrossel-04',
  'd-carrossel-05',
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'creative.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);

  for (const id of IDS) {
    const el = page.locator('#' + id);
    await el.screenshot({ path: path.join(OUT, id + '.png') });
    console.log('ok', id + '.png');
  }

  await browser.close();
})();
