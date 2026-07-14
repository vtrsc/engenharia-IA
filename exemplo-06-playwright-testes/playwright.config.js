const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 5000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'https://erickwendel.github.io',
    actionTimeout: 5000,
    navigationTimeout: 5000,
    browserName: 'chromium',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
