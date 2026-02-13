import {test,expect} from '@playwright/test';

test("program on nthe xpath axes",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2026/01/enquiry-form.html");


await page.locator("//label[text()='Name']/following::input[1]").fill("john");

await page.locator("//label[text()='Email']/following-sibling::input").fill("john@123");

await page.locator("(//div[@class='error']/preceding::input[1])[3]").fill("0123456");

await page.locator("//label[text()='Enquiry Message']/following::textarea").fill("playwright course");

await page.locator("//button[text()='Send Enquiry']").click();

let message=await page.locator("//div[text()='Your enquiry has been sent successfully!']").textContent();

await expect(message).toBe("Your enquiry has been sent successfully!");



})

