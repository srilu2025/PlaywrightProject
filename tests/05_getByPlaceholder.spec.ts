import test, { expect } from "@playwright/test"

test("practice for the locators",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");

await page.getByText("Form",{exact:true}).click();

await page.getByPlaceholder("Enter your username").fill("demo");

await page.getByPlaceholder("Enter your password").fill("demo");

await page.getByText("Login",{exact:true}).click();

let actualTitle=await page.title();

let expectedText:string="Login Form";

await expect(actualTitle).toBe(expectedText);
});