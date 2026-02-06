//https://senthilsmartqahub.blogspot.com/2025/04/imageclick.html

import test, { expect } from "@playwright/test"

test("practice for the locators",async ({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/04/imageclick.html");

    await page.getByTitle("Online Mobile Store").first().click();


    //E-Commerce

    let actualTitle:string=await page.title();

    let expectTitle:string="E-Commerce";

    expect(actualTitle).toBe(expectTitle);
});