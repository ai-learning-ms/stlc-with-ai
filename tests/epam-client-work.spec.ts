import { expect, test } from '@playwright/test';

async function acceptCookiesIfPresent(page: import('@playwright/test').Page) {
  // EPAM uses OneTrust in many regions; the id-based locator is the most stable.
  const oneTrustAccept = page.locator('#onetrust-accept-btn-handler');
  try {
    await oneTrustAccept.click({ timeout: 7000 });
    return;
  } catch {
    // ignore
  }

  // Fallback if OneTrust markup changes.
  const acceptCookiesButton = page
    .getByRole('button', { name: /accept( all)? cookies/i })
    .first();
  try {
    await acceptCookiesButton.click({ timeout: 7000 });
  } catch {
    // ignore - banner may not be shown in all geos/sessions
  }
}

test('EPAM Client Work navigation', async ({ page }) => {
  await page.goto('/');
  await acceptCookiesIfPresent(page);

  await page.locator('header').getByRole('link', { name: /Services/i }).click({ force: true });

  const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
