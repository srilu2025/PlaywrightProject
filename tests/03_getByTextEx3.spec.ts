import test, { expect } from "@playwright/test"

test("practice for the locators",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");

await page.getByRole('link', { name: 'Job Application Form' }).first().click();

let actualPageTitle=await page.title();

let ExpectedTitle:string="Job Application Form";

expect(actualPageTitle).toBe(ExpectedTitle);



})

