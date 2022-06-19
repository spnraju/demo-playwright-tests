const { test, expect } = require('@playwright/test');

test.describe('Login', async () => {
  const URL = 'https://www.saucedemo.com/';

  test('validate title', async ({ page }) => {
    await page.goto(URL);
    const logo = page.locator('.login_logo');
    await expect(logo).toBeVisible();
  });
});