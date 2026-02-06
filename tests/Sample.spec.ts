import { test, expect } from "@playwright/test";

test("getting title of the Amazon website", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.waitForLoadState("domcontentloaded");

  const title = await page.title();
  console.log(title);

  await expect(title).toBe("Amazon.com. Spend less. Smile more.");
});

test.only("Locate search textbox using title",async({page})=>{   
   await page.goto("https://www.mail.com")  
    //title="Enter searchterm here"    
     await page.getByTitle("Enter searchterm here").fill("testing")   
     await page.waitForTimeout(5000)});