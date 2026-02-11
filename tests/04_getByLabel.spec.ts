import {test,expect} from '@playwright/test';

test("practicing getByLabel",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/label.html");

await page.getByLabel("Search input for developer resources").fill("playwright");

await page.getByRole("button",{name:'Search'});

let expectedText=await page.locator("#popupMessage").textContent();

console.log(expectedText);

//await expect(expectedText).toContain("You searched for: "playwright");

})