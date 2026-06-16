import { expect, test } from '@playwright/test';

test('EPAM Client Work navigation', async ({ page }) => {
  await page.goto('/');

  await page.locator('header').getByRole('link', { name: /Services/i }).click({ force: true });

  const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
