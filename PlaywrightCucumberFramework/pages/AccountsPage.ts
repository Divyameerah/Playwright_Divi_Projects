import { Page } from '@playwright/test';

export class AccountsPage {
  constructor(private page: Page) {}

  get accountsHeader() {
    return this.page.locator('h1.title');
  }

  get accountsList() {
    return this.page.locator('#accountTable tbody tr');
  }

  async clickFirstAccount() {
    await this.page.locator('#accountTable tbody tr td a').first().click();
  }

  get accountDetailsHeader() {
    return this.page.locator('h1.title');
  }
}
