import { Page } from '@playwright/test';

export class AccountsPage {
  constructor(private page: Page) {}

  get accountsHeader() {
    return this.page.locator('h1.title').filter({ hasText: 'Accounts Overview' }).first();
  }

  get accountsList() {
    return this.page.locator('#accountTable tbody tr');
  }

  async clickFirstAccount() {
    const firstAccountLink = this.page.locator('#accountTable tbody tr td a').first();
    await firstAccountLink.waitFor();
    await firstAccountLink.click();
  }

  get accountDetailsHeader() {
    return this.page.locator('h1.title').filter({ hasText: 'Account Details' }).first();
  }
}
