class LoginPage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.loginLink = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
    this.URL = "https://demoblaze.com/index.html";
    this.title = "STORE";
  }

  async gotoLoginPage() {
    await this.page.goto(this.URL, { waitUntil: "domcontentloaded" });
  }

  async verifyPage() {
    await this.expect(this.page).toHaveURL(this.URL);
    await this.expect(this.page).toHaveTitle(this.title);
    let loginButtonElement = await this.page.locator(this.loginLink);
    await this.expect(loginButtonElement).toBeVisible();
  }

  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}

exports.LoginPage = LoginPage;
