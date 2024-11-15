const { test, expect } = require("@playwright/test");

let page;

test.beforeEach(async ({ browser }) => {
  page = browser.newPage();
  await page.goto("https://www.demoblaze.com/index.html");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("button[onclick='logIn()']").click();
  await page.waitForTimeout(5000);
});

test.afterEach(async () => {
  await page.locator("#logout2").click();
});

test("Homepage Test", async ({ page }) => {
  const productList = await page.$$(".hrefch");
  expect(productList).toHaveLength(9);

  await page.locator("#logout2").click();
  await page.waitForTimeout(5000);
});

test("AddProductToCart test", () => {
  //
});
