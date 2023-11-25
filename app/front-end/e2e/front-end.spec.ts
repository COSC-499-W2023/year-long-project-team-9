import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('Navigation tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle('obscurus');
  });

  test('should navigate to the home page and find elements', async ({ page }) => {
    await expect(page).toHaveURL(BASE_URL);
    await expect(page.locator('text="Communicate Privately, Share Confidently."')).toBeVisible();
  });
});