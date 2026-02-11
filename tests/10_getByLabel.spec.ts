import {test,expect} from '@playwright/test';

test("practicing the getByLAbel",async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/login-page.html");

await page.getByLabel("username").fill("senthilsmartqahub");

await page.getByLabel("password").fill("senthilsmartqahub");

await page.getByLabel("Remember Me").click();

await page.getByRole('button', { name: 'Login' }).click();


})