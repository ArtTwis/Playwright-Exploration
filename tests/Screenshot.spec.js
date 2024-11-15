const { test, expect } = require("@playwright/test");

test("page screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  let timestamp = Date.now();
  await page.screenshot({
    path: `tests/screenshots/` + `homepage-${timestamp}.png`,
  });
});

test("full page screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  let timestamp = Date.now();
  await page.screenshot({
    path: `tests/screenshots/` + `full-homepage-${timestamp}.png`,
    fullPage: true,
  });
});

test("particular element screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await page.waitForTimeout(5000);
  let timestamp = Date.now();
  await page.locator("//*[@id='content']/div[2]/div[1]/div").screenshot({
    path: `tests/screenshots/` + `element-${timestamp}.png`,
    fullPage: false,
  });
});
