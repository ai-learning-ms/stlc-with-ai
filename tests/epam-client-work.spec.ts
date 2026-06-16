import { test, expect } from '@playwright/test';

test('EPAM Client Work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.locator('header').getByRole('link', { name: 'Services', exact: true }).click({ force: true });
  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
