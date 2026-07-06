import { Page } from 'playwright';

export class DashboardPage {
  constructor(private page: Page) {}

  get dashboardHeader() {
    return this.page.locator('h1:has-text("Dashboard")');
  }
}
