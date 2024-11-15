const { test, expect } = require("@playwright/test");

test("AssertionsTest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  // expect page.toHaveURL()
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // expect page.toHaveTitle()
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  let RegisterHeadingElement = await page.locator(".page-title");

  // expect page.toBeVisible()
  await expect(RegisterHeadingElement).toBeVisible();

  let searchElement = await page.locator("#small-searchterms");

  // expect page.toBeEnabled()
  await expect(searchElement).toBeEnabled();

  // expect page.isChecked()
  let radioButtons = await page.$$("input[name='Gender']");

  for (const button of radioButtons) {
    await button.click();
    let buttonID = await button.getAttribute("id");
    let label = await page.locator(`label[for='${buttonID}']`).textContent();
    let isChecked = await button.isChecked();

    console.log(`Button ${label} is checked : ${isChecked}`);
  }

  let isNewsletterIsChecked = await page
    .locator("input[id='Newsletter']")
    .isChecked();

  // expect page.toHaveAttribute()
  let registerButton = await page.locator("#register-button");
  await expect(registerButton).toHaveAttribute("type", "submit");

  // expect page.toHaveText()
  let registerLabel = await page.locator(".page-title h1");
  await expect(registerLabel).toHaveText("Register");

  // expect page.toContainText()
  await expect(registerLabel).toContainText("gist");

  // expect page.toHaveValue()
  let firstNameElement = await page.locator("#FirstName");
  await firstNameElement.fill("Twinkle");
  await expect(firstNameElement).toHaveValue("Twinkle");

  // expect page.toHaveCount()
  let monthDropDownOptions = await page.locator(
    "select[name='DateOfBirthMonth'] option"
  );
  await expect(monthDropDownOptions).toHaveCount(13);
});
