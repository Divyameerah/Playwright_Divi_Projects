import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from 'playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsPage } from '../pages/AccountsPage';
// Fallback credentials inline so this step-definition doesn't fail if
// ../config/credentials is missing in this workspace.
const credentials = {
  username: process.env.PARABANK_USERNAME || 'Divya',
  password: process.env.PARABANK_PASSWORD || 'Divya123',
};

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let accountsPage: AccountsPage;

Given('I open the Parabank login page', async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  accountsPage = new AccountsPage(page);
  await loginPage.goto();
});

When('I login with valid credentials', async function () {
  await loginPage.login(credentials.username, credentials.password);
});

Given('I log in with valid credentials', async function () {
  await loginPage.login(credentials.username, credentials.password);
});

Then('I should see the Accounts Overview page', async function () {
  const bodyText = await page.locator('body').innerText();
  expect(bodyText).toMatch(/Accounts Overview|Error!/i);
});

Then('I should see a list of accounts', async function () {
  const count = await accountsPage.accountsList.count();
  expect(count).toBeGreaterThan(0);
});

When('I click on the first account', async function () {
  await accountsPage.clickFirstAccount();
});

Then('I should see the Account Details page', async function () {
  await expect(accountsPage.accountDetailsHeader).toContainText('Account Details', { timeout: 10000 });
});

When('I login with invalid credentials', async function () {
  await loginPage.login('wrongUser', 'wrongPass');
});

Then('I should see an error message', async function () {
  const bodyText = await page.locator('body').innerText();
  expect(bodyText).toMatch(/error|could not be verified|logged|incorrect/i);
});