import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

test.describe('Parabank Login', () => {
  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.goto();

    // Perform login
    await loginPage.login('john', 'demo'); // replace with valid demo credentials

    // Verify Accounts Overview page
    await expect(page.locator('h1.title')).toContainText('Accounts Overview');
  });

  test('Invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrongUser', 'wrongPass');

    // Verify error message
    await expect(page.locator('.error')).toContainText(
      'The username and password could not be verified.'
    );
  });
});
