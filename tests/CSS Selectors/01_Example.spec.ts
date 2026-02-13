import {test,expect} from '@playwright/test';

test("program on the Css Selector",async ({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/01/information-form.html")

    await page.locator("#userName").fill('john doe');

    await page.locator("input[name='userEmail']").fill('john@123');

    await page.locator(".userPhone").fill("012345");

    await page.getByText("Submit",{exact:true}).click();

    let expectedText="Form submitted successfully!";

    let actualText=await page.locator("//div[@id='success-message']").textContent();

    await expect(actualText).toBe(expectedText);


})