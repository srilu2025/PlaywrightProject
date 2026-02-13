import {test,expect} from '@playwright/test';

test("program on the Normalize-space()",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");

await page.locator("//a[normalize-space()='Name and Address Form']").click();

let text=await page.locator("//h3[normalize-space()='Name & Address Form']").textContent();

console.log(text);

await expect(text).toBeTruthy();
})