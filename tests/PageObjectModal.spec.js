const { test, expect } = require("@playwright/test");
import { LoginPage } from "../pages/LoginPage.js";
import { Homepage } from "../pages/HomePage.js";
import { CartPage } from "../pages/CartPage.js";

test("Without Page Object Modal", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  await expect(page).toHaveURL("https://demoblaze.com/index.html");

  await expect(page).toHaveTitle("STORE");

  let loginButtonElement = await page.locator("a[id='login2']");

  await expect(loginButtonElement).toBeVisible();

  await loginButtonElement.click();

  await page.waitForTimeout(3000);

  await page.locator("input[id='loginusername']").fill("pavanol");

  await page.locator("input[id='loginpassword']").fill("test@123");

  let loginButtonElement2 = await page.locator("button[onclick='logIn()']");

  await expect(loginButtonElement2).toHaveText("Log in");

  await loginButtonElement2.click();

  await page.waitForTimeout(3000);

  await expect(page).toHaveURL("https://demoblaze.com/index.html");

  let logoutButtonElement = await page.locator("a[id='logout2']");

  await expect(logoutButtonElement).toBeVisible();

  await expect(await page.locator("a[id='nameofuser']")).toHaveText(
    "Welcome pavanol"
  );

  await page.close();
});

test("With Page Object Modal", async ({ page }) => {
  // Login
  const loginPageObject = new LoginPage(page, expect);

  await loginPageObject.gotoLoginPage();

  await loginPageObject.verifyPage();

  await loginPageObject.login("pavanol", "test@123");

  await page.waitForTimeout(3000);

  // Home
  const homepageObject = new Homepage(page, expect);

  await homepageObject.verifyLogin();

  await homepageObject.gotoProductPage("Nexus 6");

  await page.waitForTimeout(5000);

  await homepageObject.addProductToCart();

  await homepageObject.gotoCartPage();

  await page.waitForTimeout(5000);

  //Cart
  const cartpageObject = new CartPage(page, expect);

  await cartpageObject.verifyProductInCart("Nexus 6");

  await cartpageObject.placeOrder();
});
