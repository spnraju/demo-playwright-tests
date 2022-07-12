import { test } from '@playwright/test';
import { Login } from '../pages';

test.describe('Login', async () => {
  test('validate title', async ({ page }) => {
    const login = new Login(page);
    await login.open();
    await login.login(process.env.STANDARD, process.env.PASSWORD);
  });
});
