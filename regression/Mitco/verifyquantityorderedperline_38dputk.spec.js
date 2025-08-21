const { test, expect } = require('@playwright/test');
import { Loginpage } from '../../pages/LoginPage.page';
import { Neworderpage } from '../../pages/NewOrder.page';

test('Extended Price Item Validate', async ({ page }) => {
    const loginPage = new Loginpage(page)
    const neworderpage = new Neworderpage(page)

    await loginPage.visitmitco();
    
    await expect(page).toHaveTitle(/React App/);

    await neworderpage.QuantitySetFlow();

    //await loginPage.invalidlogin();
  })