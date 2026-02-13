import {test,expect} from '@playwright/test';

test("program on Xpath Ancestor and Descendant",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2026/01/mobile-recharge.html");

await page.locator("//label[text()='Mobile Number']/ancestor::div[@class='field-section']/descendant::input").fill("0192837465");

//await page.locator("//div[@class='input-wrapper']/descendant::select").click();

const operatorSelect = page.locator("//label[text()='Operator']/ancestor::div[@class='field-section']/descendant::select");
await operatorSelect.selectOption({ label: "Airtel" });
await page.waitForTimeout(500);

await page.locator("//label[text()='Recharge Amount']/ancestor::div[@class='field-section']/descendant::input").fill("500");
await page.waitForTimeout(500);

await page.locator("//button[text()='Recharge Now']/ancestor::div[@class='field-section']/descendant::button[1]").click();
await page.waitForTimeout(500);

let text=await page.locator("//div[@class='success']").textContent();
await expect(text).toContain("Recharge completed successfully!")
})