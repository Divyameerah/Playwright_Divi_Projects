import { Page } from 'playwright';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.fill('#txtUsername', username);
    await this.page.fill('#txtPassword', password);
    await this.page.click('#btnLogin');
  }
}
