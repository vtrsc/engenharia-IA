import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,
    baseURL: 'https://erickwendel.github.io/vanilla-js-web-app-example/',
    browserName: 'chromium',
    launchOptions: {
      args: ['--start-maximized']
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
