import {test,expect} from '@playwright/test';

test("program on xpath contains()",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");

await page.locator("//a[contains(text(),'Doctor Appointment Form')]").click();

let message=await page.locator("//h2[text()='Doctor Appointment Form']").textContent();

await expect(message).toBe("Doctor Appointment Form");
})