Playwright bug report example showing how a skipped test fails if `test.skip()` is called within a page response handler.

### Expected Result

_(this test works)_

```tsx
test("Playwright marks a test as skipped, when using test.skip()", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  test.skip();
  await expect(page).toHaveTitle(/Playwright/);
});
```

Playwright marks this test as skipped.

<img width="80%" height="234" alt="image" src="https://github.com/user-attachments/assets/3c2ea51d-c1a3-4eb6-b675-6625d9390067" />

### Actual Result

_(this test fails)_

```tsx
test("Playwright marks a test as skipped, when test.skip() is called inside of a page response handler", async ({
  page,
}) => {
  // Putting test.skip() inside of page.on('response') fails instead of skips
  page.on("response", (response) => {
    test.skip();
  });
  await page.goto("https://playwright.dev/");
});
```
Playwright marks this test as failing.

<img width="80%" height="485" alt="image" src="https://github.com/user-attachments/assets/13a8ffd7-0ede-45a7-9d56-59d17a4e0a00" />
