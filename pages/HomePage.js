class Homepage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.URL = "https://demoblaze.com/index.html";
    this.title = "STORE";
    this.logoutButton = "#logout2";
    this.welcomeLabel = "#nameofuser";
    this.welcomeMessage = "Welcome pavanol";
    this.productList = "//div[@id='tbodyid']//div//h4//a['.hrefch']";
    this.addToCartButtonXPath = "//a[normalize-space()='Add to cart']";
    this.addProductToCartButtonText = "Add to cart";
    this.cartLinkXPath = "a[href='cart.html']";
  }

  async verifyLogin() {
    await this.expect(this.page).toHaveURL(this.URL);
    await this.expect(this.page).toHaveTitle(this.title);
    let logoutButtonElement = await this.page.locator(this.logoutButton);
    await this.expect(logoutButtonElement).toBeVisible();
  }

  async gotoProductPage(productName) {
    const productList = await this.page.$$(this.productList);
    for (const product of productList) {
      if (productName === (await product.textContent())) {
        await product.click();
        break;
      }
    }
  }

  async addProductToCart() {
    let addToCartButton = await this.page.locator(this.addToCartButtonXPath);
    await addToCartButton.click();

    await this.page.waitForTimeout(3000);

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });
  }

  async gotoCartPage() {
    let cartLink = await this.page.locator(this.cartLinkXPath);
    await cartLink.click();
  }
}

exports.Homepage = Homepage;
