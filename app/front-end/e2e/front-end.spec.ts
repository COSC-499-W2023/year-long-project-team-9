import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    //use amplify url
  await page.goto('https://amplify.ds4nt6byy9rfg.amplifyapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("");
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://amplify.ds4nt6byy9rfg.amplifyapp.com/');

//   // Click the sign in button.
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
