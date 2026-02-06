import test, { expect } from "@playwright/test"

test("practice for the locators",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/e-commerce.html");

await page.getByAltText("Samsung Galaxy S24").click();

let actualTitle:string=await page.title();
console.log("SenthilSmartQAHub");

let expectedTitle:string="SenthilSmartQAHub";

expect(actualTitle).toBe(expectedTitle);

});