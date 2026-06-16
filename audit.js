// audit.js – Playwright script to capture DOM and screenshot of the login page

const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  // Launch headless Chromium
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the locally served login app
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // Capture full HTML of the page
  const html = await page.content();
  fs.writeFileSync('page.html', html);

  // Take a full‑page screenshot for visual reference
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await browser.close();
})();
