const { test, expect } = require("@playwright/test");

test("LocatingMultipleElements", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.click("id=login2");

  await page.fill("#loginusername", "pavanol");

  await page.fill("input[id='loginpassword']", "test@123");

  await page.click("button[onclick='logIn()']");

  let logoutButtonElement = await page.locator("#logout2");

  await expect(logoutButtonElement).toBeVisible();

  await page.waitForSelector("//div[@id='tbodyid']//div//h4//a['.hrefch']");

  // const elements = await page.$$("a[class='hrefch']");

  // for (const link of elements) {
  //   let linkTextContent = await link.textContent();

  //   console.log("textContent >>", linkTextContent);
  // }

  const elements = await page.$$("//div[@id='tbodyid']//div//h4//a['.hrefch']");

  for (const link of elements) {
    let elementTextContent = await link.textContent();

    console.log("elementTextContent >>", elementTextContent);
  }

  await page.close();
});
