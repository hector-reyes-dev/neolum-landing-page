const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4321');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'updated_hero_footer.png', fullPage: true });
  await browser.close();
})();
