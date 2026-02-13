import {test,expect} from '@playwright/test';

test("program on the xpath position",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2026/01/button-click-example.html");

//button 1
await page.locator("//button[@class='btn'][position()=1]").click();
let button1=await page.locator("//p[text()='Button 1 clicked']").textContent();
await expect(button1).toContain("Button 1 clicked");

//button 2
await page.locator("//button[@class='btn'][position()=2]").click();
let button2=await page.locator("//p[text()='Button 2 clicked']").textContent();
await expect(button2).toContain("Button 2 clicked");

//button 3
await page.locator("//button[@class='btn'][position()=3]").click();
let button3=await page.locator("//p[text()='Button 3 clicked']").textContent();
await expect(button3).toContain("Button 3 clicked");

//button 4
await page.locator("//button[@class='btn'][position()=last()]").click();
let button4=await page.locator("//p[text()='Button 4 clicked']").textContent();
await expect(button4).toContain("Button 4 clicked");





})