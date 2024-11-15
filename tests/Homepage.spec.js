const { test, expect } = require("@playwright/test");

test("Homepage", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log("Page title is :", pageTitle);

  await expect(page).toHaveTitle(pageTitle);

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  await page.close();
});
