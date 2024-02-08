import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'obscurus' }).click();
  await page.getByText('obscurus').click();
  await page.getByRole('heading', { name: 'Spanish Lesson' }).click();
});