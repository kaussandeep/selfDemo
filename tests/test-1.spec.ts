import { test, expect } from "@playwright/test";

test("Verify Support page has correct Driver Display image and Text", async ({
  page,
}) => {
  await page.goto("https://www.volvocars.com/uk/support");
  await page.getByRole("button", { name: "Accept" }).click();
  await page.getByLabel("Select a car model").scrollIntoViewIfNeeded();
  await page.getByLabel("Select a car model").selectOption("xc90");
  await page.getByLabel("Select a car year").selectOption("22w22");
  await page.getByText("Owners manual", { exact: true });
  await page
    .locator("li")
    .filter({
      hasText:
        "Owner informationOwner informationReading the owner's manualComplete owner's man",
    })
    .getByTitle("Expand")
    .click();
  await page.getByRole("link", { name: "Owner information" }).click();
  await page
    .getByText(
      "Owner's information is available in several different product formats, both digi"
    )
    .click();
  //Image comparison and Text Comparisons
  await page.getByRole("link", { name: "Owner information" }).filter({
    hasText:
      "Owner's information is available in several different product formats,",
  });

  await expect(
    page.getByRole("link", { name: "Owner information" })
  ).toHaveScreenshot("DriverDisplay.png");
});

test("Example API test: verify age", async ({ request }) => {
  const baseURL = "https://api.agify.io/?name=";
  const _response = await request.get(`${baseURL}sandeep`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  let _repost = await _response.json();
  expect(_repost.age).toBe(48);
});
