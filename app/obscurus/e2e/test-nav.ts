import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('link', { name: 'obscurus' }).first().click();
  await page.getByRole('list').getByRole('link', { name: 'obscurus' }).click();
  await page.getByRole('link', { name: 'Request' }).click();
  await page.getByRole('link', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'Submissions' }).click();
  await page.getByTestId('light').dblclick();
  await page.getByTestId('system').click();
});