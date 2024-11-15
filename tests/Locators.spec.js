const { test, expect } = require("@playwright/test");

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // Locating web elements....
  // await page.locator("").click();
  // await page.click("");
  // await page.
  await page.locator("id=login2").click();

  // provide username css-selector
  // await page.locator("#loginusername").fill("pavanol");
  await page.fill("#loginusername", "pavanol");

  // provide password css-selector
  await page.fill("input[id='loginpassword']", "test@123");

  // provide button css-selector
  await page.click("button[onclick='logIn()']");

  // verify logout link present...
  const logoutButton = await page.locator("#logout2");

  await expect(logoutButton).toBeVisible();

  await page.close();
});
