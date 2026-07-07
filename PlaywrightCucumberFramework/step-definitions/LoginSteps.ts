import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { AccountsPage } from '../pages/Accountspage';
// Fallback credentials inline so this step-definition doesn't fail if
// ../config/credentials is missing in this workspace.
const credentials = {
  username: process.env.PARABANK_USERNAME || 'testuser',
  password: process.env.PARABANK_PASSWORD || 'testpass',
};
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let accountsPage: AccountsPage;

Given('I open the Parabank login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  accountsPage = new AccountsPage(page);
  await loginPage.goto();
});

When('I login with valid credentials', async function () {
  await loginPage.login(credentials.username, credentials.password);
});

Then('I should see the Accounts Overview page', async function () {
  await expect(accountsPage.accountsHeader).toContainText('Accounts Overview');
  await browser.close();
});

When('I login with invalid credentials', async function () {
  await loginPage.login('wrongUser', 'wrongPass');
});

Then('I should see an error message', async function () {
  await expect(loginPage.errorMessage).toContainText('The username and password could not be verified.');
  await browser.close();
});