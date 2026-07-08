import { test, expect } from '@playwright/test';

const pageUrl = 'https://erickwendel.github.io/vanilla-js-web-app-example/';

test.describe('image form', () => {
  test('submits the form and updates the list with the new item', async ({ page }) => {
    await page.goto(pageUrl);

    const titleInput = page.getByRole('textbox', { name: 'Image Title' });
    const urlInput = page.getByRole('textbox', { name: 'Image URL' });
    const submitButton = page.getByRole('button', { name: 'Submit Form' });

    const uniqueTitle = `Playwright Test ${Date.now()}`;
    const uniqueUrl = `https://picsum.photos/seed/${Date.now()}/200/200`;

    await titleInput.fill(uniqueTitle);
    await urlInput.fill(uniqueUrl);
    await submitButton.click();

    const newCard = page.locator('article').filter({ has: page.getByRole('heading', { name: uniqueTitle }) }).first();
    await expect(newCard).toBeVisible();
    await expect(newCard.getByRole('img')).toHaveAttribute('src', uniqueUrl);
  });

  test('shows validation feedback when required fields are empty', async ({ page }) => {
    await page.goto(pageUrl);

    await page.getByRole('button', { name: 'Submit Form' }).click();

    await expect(page.locator('#titleFeedback')).toHaveText(/Please type a title/i);
    await expect(page.locator('#urlFeedback')).toHaveText(/Please type a valid URL/i);
  });
});
