import test, { expect } from "@playwright/test";

test("practice for the locators",async ({page})=>{

await page .goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");

 await page.getByText("Name and Address Form").click();     
 
 let loginPageActual:string="Name & Address Form";

 expect(loginPageActual).toBe("Name & Address Form");




});