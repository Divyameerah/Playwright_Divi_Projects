import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { AccountsPage } from '../pages/AccountsPage';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let accountsPage: AccountsPage;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  accountsPage = new AccountsPage(page);
  this.browser = browser;
  this.page = page;
  this.loginPage = loginPage;
  this.accountsPage = accountsPage;
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

Given(/I (?:open|am on) the Parabank login page/i, async function () {
  await loginPage.goto({ waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.locator('input[name="username"]').waitFor({ state: 'visible', timeout: 30000 }).catch(() => undefined);
  await page.waitForTimeout(1000);
});

When(/I (?:log in|login) with valid credentials/i, async function () {
  await loginPage.login('Divya', 'Divya123');
});

When(/I (?:log in|login) with invalid credentials/i, async function () {
  await loginPage.login('wrongUser', 'wrongPass');
});

Then('I should see the Accounts Overview page', async function () {
  const headings = page.locator('h1.title');
  await expect(headings.filter({ hasText: 'Accounts Overview' }).first()).toBeVisible({ timeout: 15000 });
});

Then('I should see an error message', async function () {
  await expect(page.locator('.error')).toContainText(/could not be verified|incorrect|error/i, { timeout: 15000 });
});
