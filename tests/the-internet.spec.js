const { test, expect } = require('@playwright/test');

test('validate title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  const title = page.locator('.heading');
  await expect(title).toHaveText('Welcome to the-internet');
});