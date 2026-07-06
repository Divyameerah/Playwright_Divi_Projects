import {
    test,
    expect
} from '../fixtures/orangehrm.fixture';

test('Login to OrangeHRM', async ({ page }) => {
    // Use the demo credentials for the public OrangeHRM demo site
    const credentials = { username: 'Admin', password: 'admin123' };

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.fill('input[name="username"]', credentials.username);
    await page.fill('input[name="password"]', credentials.password);
    await page.click('button[type="submit"]');

    await expect(page.locator('h6')).toBeVisible();
});
