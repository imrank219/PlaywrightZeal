const { test, expect } = require('@playwright/test');
import { Loginsaucepage} from '../../pages/loginsauce.page';
import { Inventorysaucepage} from '../../pages/Inventory.page';


test.use({storageState: "authsauce.json"});
test('Zeal sauce demo', async ({ page }) => {

  const loginnew = new Loginsaucepage(page);
  const invent = new Inventorysaucepage(page);


  await loginnew.visitsauce();
 await loginnew.loginflow();
//  await invent.selectbackpack();

    
  })
