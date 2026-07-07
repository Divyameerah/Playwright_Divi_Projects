import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('I should see a list of accounts', async function () {
  const bodyText = await this.page.locator('body').innerText();
  expect(bodyText).toMatch(/Account|Accounts Overview/i);
});

When('I click on the first account', async function () {
  await this.accountsPage.clickFirstAccount();
});

Then('I should see the Account Details page', async function () {
  await expect(this.accountsPage.accountDetailsHeader).toContainText('Account Details', { timeout: 15000 });
});


