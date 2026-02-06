import {test,expect} from '@playwright/test';

test("practice for the locators",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");


await page.getByText("Form",{exact:true}).click();

let actualLoginPageTitle:string=await page.title();

let expectedTitle:string="Login Form";

expect(actualLoginPageTitle).toBe(expectedTitle);



});