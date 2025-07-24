import { test, expect } from "@playwright/test";

test("Playwright marks a test as skipped, when using test.skip()", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  test.skip();
  await expect(page).toHaveTitle(/Playwright/);
});

test("Playwright marks a test as skipped, when test.skip() is called inside a page response handler", async ({
  page,
}) => {
  page.on("response", (response) => {
    test.skip();
  });
  await page.goto("https://playwright.dev/");
});
