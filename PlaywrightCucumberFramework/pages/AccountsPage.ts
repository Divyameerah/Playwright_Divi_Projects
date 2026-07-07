import { Page } from '@playwright/test';

export class AccountsPage {
  constructor(private page: Page) {}

  get accountsHeader() {
    return this.page.locator('h1.title');
  }
}