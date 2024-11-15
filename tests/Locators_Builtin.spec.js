// page.getByAltText() to locate an element, usually image, by its text alternative.
// let imageElement = await page.getByAltText("company-branding");

// page.getByPlaceholder() to locate an input by placeholder.
// await page.getByPlaceholder("Username").fill("Admin");

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// await page.getByRole("button", { name: "Login" }).click();

// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

const { test, expect } = require("@playwright/test");

test("BuiltIn-Locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  let imageElement = await page.getByAltText("company-branding");

  await expect(imageElement).toBeVisible();

  await page.getByPlaceholder("Username").fill("Admin");

  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForSelector("img[alt='profile picture']");

  let profileImageElement = await page.getByAltText("profile picture");

  await expect(profileImageElement).toBeVisible();

  let usernameElement = await page.locator(".oxd-userdropdown-name");

  await expect(usernameElement).toBeVisible();

  let username = await usernameElement.textContent();

  await expect(await page.getByText(username)).toBeVisible();

  await page.close();
});
