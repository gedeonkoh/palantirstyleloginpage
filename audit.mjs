// audit.mjs – Playwright script (ES module) to capture DOM and screenshot of the login page

import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the locally running Vite dev server
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // Capture full HTML content
  const html = await page.content();
  fs.writeFileSync('page.html', html);

  // Capture a full-page screenshot for visual reference
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await browser.close();
})();
