
import test, { expect } from "@playwright/test"

test("practice for the locators",async ({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/name-address-form.html");

    await page.getByTestId("username").fill("playwright");


});