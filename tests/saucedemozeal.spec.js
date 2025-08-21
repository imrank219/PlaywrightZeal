const { test, expect } = require('@playwright/test');
import { Loginsaucepage} from '../pages/loginsauce.page';
import { Inventorysaucepage} from '../pages/Inventory.page';
import { Cartsaucepage } from '../pages/Cart.page';
import { Infosaucepage } from '../pages/Info.page';
import { Checksaucepage } from '../pages/Checkout.page';


test.use({storageState: "authsauce2.json"});
test('Zeal sauce demo', async ({ page }) => {

  const loginnew = new Loginsaucepage(page);
  const invent = new Inventorysaucepage(page);
  const cart = new Cartsaucepage(page);
  const inform = new Infosaucepage(page);
  const checkp = new Checksaucepage(page);

  await loginnew.visitsauce();
//  await loginnew.visitsauce2();
  await loginnew.loginflow();
  await invent.selectbackpack();
  await cart.cartflow();
  await inform.InfoFlow();
  await checkp.checkflow();
  

    
  })
