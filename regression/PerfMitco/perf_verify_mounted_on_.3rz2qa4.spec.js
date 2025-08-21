const { test, expect } = require('@playwright/test');
import { Loginpage } from '../../pages/LoginPage.page';
import { Neworderpage } from '../../pages/NewOrder.page';

test('Verify order', async ({ page }) => {
    const loginPage = new Loginpage(page)
    const neworderpage = new Neworderpage(page)

    await loginPage.visitmitcox();
        await expect(page).toHaveTitle(/React App/);
   await neworderpage.MountedItem();

    //await loginPage.invalidlogin();
  })