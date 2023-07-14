import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.volvocars.com/uk/support');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByLabel('Select a car model').selectOption('xc90');
  await page.getByLabel('Select a car year').selectOption('22w22');
  await page.getByText('Owners manual', { exact: true });

});