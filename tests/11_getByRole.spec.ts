import test from "@playwright/test";

test("Locate the element using getByRole",async({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/smart-bank-login.html")

    await page.getByRole("textbox",{name:'Username'}).fill("admin")

    await page.getByRole("textbox",{name:'Password'}).fill("12345")

    await page.getByRole("checkbox",{name:"Remember Me"}).check()

    await page.getByRole("button",{name:'Login'}).click()

    await page.waitForTimeout(5000)

})