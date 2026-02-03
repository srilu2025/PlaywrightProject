import { test, expect } from "@playwright/test";

test("getting title of the Amazon website", async ({ page }) => {
  await page.goto("https://www.amazon.com/");

  const title = await page.title();
  console.log(title);

  expect(title).toBe("Amazon.com. Spend less. Smile more.");
});
