const { test, expect } = require('@playwright/test');

const appPath = '/vanilla-js-web-app-example/';
const cardList = '#card-list';

test.beforeEach(async ({ page }) => {
  await page.goto(appPath);
});

test('load example app and verify page structure', async ({ page }) => {
  await expect(page).toHaveTitle(/TDD Frontend Example/);
  await expect(page.locator('#title')).toBeVisible();
  await expect(page.locator('#imageUrl')).toBeVisible();
  await expect(page.locator('#btnSubmit')).toBeVisible();
  await expect(page.locator(`${cardList} article`)).toHaveCount(3);
});

test('submits the form and appends a new card to the list', async ({ page }) => {
  const title = 'My New Card';
  const imageUrl = 'https://via.placeholder.com/300.png';

  await page.fill('#title', title);
  await page.fill('#imageUrl', imageUrl);
  await page.click('#btnSubmit');

  await expect(page.locator(`${cardList} article`)).toHaveCount(4);
  await expect(page.locator(`${cardList} article:last-child h4.card-title`)).toHaveText(title);
  await expect(page.locator(`${cardList} article:last-child img`)).toHaveAttribute('src', imageUrl);
});

test('shows validation when title is missing', async ({ page }) => {
  await page.fill('#imageUrl', 'https://via.placeholder.com/300.png');
  await page.click('#btnSubmit');

  await expect(page.locator('form')).toHaveClass(/was-validated/);
  await expect(page.locator('#title')).toBeFocused();
  await expect(page.locator(`${cardList} article`)).toHaveCount(3);
});

test('shows validation when image URL is invalid', async ({ page }) => {
  await page.fill('#title', 'Title Only');
  await page.fill('#imageUrl', 'invalid-url');
  await page.click('#btnSubmit');

  await expect(page.locator('form')).toHaveClass(/was-validated/);
  await expect(page.locator('#imageUrl')).toBeFocused();
  await expect(page.locator(`${cardList} article`)).toHaveCount(3);
});
