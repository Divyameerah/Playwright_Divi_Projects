import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';

const credentials = {
  username: 'Admin',
  password: 'admin123',
};

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('I open the OrangeHRM login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await page.goto('https://opensource-demo.orangehrmlive.com/');
});

When('I login with valid credentials', async function () {
  await loginPage.login(credentials.username, credentials.password);
});

Then('I should see the dashboard', async function () {
  await page.locator('text=Dashboard').waitFor({ state: 'visible' });
  await browser.close();
});
