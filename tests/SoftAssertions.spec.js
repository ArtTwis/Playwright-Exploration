const { test, expect } = require("@playwright/test");

test("Hard vs Soft Assertions", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect.soft(page).toHaveTitle("nopCommerce demo store Register");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  let logoElement = await page.getByAltText("nopCommerce demo store");

  await expect(logoElement).toBeVisible();

  let value = 56;

  await expect.soft(value, "custom expect message").toBe(59);

  await page.close();
});
