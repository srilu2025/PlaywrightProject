import { test, expect } from "@playwright/test";

test("getting title of the Amazon website", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.waitForLoadState("domcontentloaded");

  const title = await page.title();
  console.log(title);

  await expect(title).toBe("Amazon.com. Spend less. Smile more.");
});
