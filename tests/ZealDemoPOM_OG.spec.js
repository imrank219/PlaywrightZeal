const { test, expect } = require('@playwright/test');
//import { Destinationpage, Loginpage } from '../pages/Destination.page';
import { Destinationpage, Loginpage } from '../pages/Destination2.page';
import { Flightpage } from '../pages/Flight.page';
import { Reservationpage } from '../pages/Reservation.page';
import { Confirmationpage } from '../pages/Confirmation.page';




test('Book First Flight', async ({ page }) => {

    //const DestPage = new Destinationpage(page)
    const DestPage = new Destinationpage(page)
    const FlyPage = new Flightpage(page)
    const ReserPage = new Reservationpage(page)
    const ConfirmPage = new Confirmationpage(page)

    await DestPage.visit();
    await DestPage.selectflightDepart();
    await FlyPage.flightSelect();
    await ReserPage.addReservationData();
    await ConfirmPage.validateConfirmationPage();
    await ConfirmPage.validateScreenShot();
  
    
  })
