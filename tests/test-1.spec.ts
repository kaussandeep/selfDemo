import { test, expect } from '@playwright/test';


test('Verify Support page has correct Driver Display image and Text', async ({ page }) => {
  await page.goto('https://www.volvocars.com/uk/support');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByLabel('Select a car model').scrollIntoViewIfNeeded();
  await page.getByLabel('Select a car model').selectOption('xc90');
  await page.getByLabel('Select a car year').selectOption('22w22');
  await page.getByText('Owners manual', { exact: true });
  await page.getByRole('link', { name: 'Explore the manual' }).click();
  await page.locator('[id="\\38 d5ce21f8c14b3a6c0a8cc7221c68fd0"] > div > .aj > .bx').first().click();
  await page.locator('div').filter({ hasText: /^Driver display$/ }).nth(1).click();
  await page.getByRole('link', { name: 'Driver display', exact: true }).click();
  await page.getByText('The driver display contains gauges, driver support functions, and indicator and ').click();
  await page.getByRole('button', { name: 'P5-22w26-iCup-Driver display ICE/MHEV' }).scrollIntoViewIfNeeded();
  await expect(page.getByRole('button', { name: 'P5-22w26-iCup-Driver display ICE/MHEV' })).toHaveScreenshot("DriverDisplay.png");
  await expect(page.locator('p').filter({ hasText: 'The driver display contains gauges, driver support functions, and indicator and ' })).toBeTruthy;
});


test("Example API test: verify age", async ({ request }) => {
  const baseURL = "https://api.agify.io/?name=";
  const _response = await request.get(`${baseURL}sandeep`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  let _repost = await _response.json();
  expect(_repost.age).toBe(48);
});