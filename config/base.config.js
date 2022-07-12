// playwright.config.js
// @ts-check
require('@babel/register');
require('dotenv').config();

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: '../tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
    },
    {
      name: 'firefox',
    },
    {
      name: 'webkit',
    },
  ],
};

module.exports = config;
