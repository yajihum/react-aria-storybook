import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('combobox page', async ({ page }, testInfo) => {
  await page.goto('/combobox');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json',
  });

  await expect(
    page.getByRole('heading', { level: 1, name: 'Combobox' }),
  ).toBeVisible();
  await expect(
    page.getByRole('combobox', { name: 'Favorite Animal' }),
  ).toBeVisible();
  expect(accessibilityScanResults.violations).toEqual([]);
});
