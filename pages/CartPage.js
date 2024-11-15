class CartPage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.productLabelXPath = "//*[@id='tbodyid']/tr/td";
    this.placeOrderButtonXPath = "#orderModal";
    this.isVerified = false;
  }

  async verifyProductInCart(productName) {
    let cartProductList = await this.page.$$(this.productLabelXPath);

    for (const product of cartProductList) {
      if ((await product.textContent()) === productName) {
        this.isVerified = true;
      }
    }
  }

  async placeOrder() {
    await this.expect(this.isVerified).toBe(true);
  }
}

exports.CartPage = CartPage;
