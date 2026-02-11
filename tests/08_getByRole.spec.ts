import {test,expect} from '@playwright/test';

test("getByRole program",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/e-commerce.html");

await page.waitForLoadState('networkidle');

await page.getByRole("searchbox").fill("samsung");

let text=await page.getByText("Samsung Galaxy S24").textContent();




await expect(text).toContain("Samsung Galaxy S24");

})