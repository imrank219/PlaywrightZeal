import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Flight', () => {
  test('book the next available timeslot', async ({ page }) => {
    
    await page.goto('https://blazedemo.com/index.php')
    await page.waitForTimeout(4000);

    await ai('Verify the Choose your departure city is displayed', { page, test })
    await ai('Select drop down box for departure city', { page, test })
    await ai('Select Philadelphia from the departure city', { page, test })
    await ai('Select drop down box for destination city', { page, test })
    await ai('Select London from the destination city', { page, test })
    await ai('Click the Find Flights button', { page, test })
 //   await ai('Fill out the form with realistic values', { page, test })
 //   await ai('Submit the form', { page, test })

 //   const element = await page.getByText('You are scheduled')
 //   expect(element).toBeDefined()
  })
})