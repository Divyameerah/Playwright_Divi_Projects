import { Page } from 'playwright';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('input[value="Log In"]');
  }

  get errorMessage() {
    return this.page.locator('.error'); // Parabank shows error in a div with class "error"
  }
}
