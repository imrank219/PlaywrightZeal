const { test, expect } = require('@playwright/test');

async function testLogin(page){
    await page.goto('https://thewisemangroup.com/quiz/accidental-diminisher/');
    await page.getByRole('link', { name: 'Begin the Quiz >' }).click();
   // await page.getByLabel('* Email').click();
    await page.getByLabel('* Email').fill('test12345@msn.com');
 //   await page.getByLabel('* Name').click();
    await page.getByLabel('* Name').fill('FC testert');
//    await page.getByLabel('* Title').click();
    await page.getByLabel('* Title').fill('tester');
//    await page.getByLabel('* Company').click();
    await page.getByLabel('* Company').fill('test');
    await page.getByLabel('* Have you read or own ‘').selectOption('yes');
    await page.getByLabel('* Have you attended one of').selectOption('yes');
    await page.getByRole('button', { name: 'Start Quiz!' }).click();
    await page.locator('#tmhs-twg-accidental-diminisher-quiz-block div').filter({ hasText: 'Not at all like this' }).nth(4).click();
    await page.locator('#tmhs-twg-accidental-diminisher-quiz-block div').filter({ hasText: 'Not at all like this' }).nth(4).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Not at all like this').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Not at all like this').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To some extent').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To some extent').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To a moderate extent').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To a moderate extent').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To a moderate extent').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To a moderate extent').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To a great extent').check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('To a great extent').check();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'No thanks, I’ll pass on 40%' }).click();
    await expect(page.getByRole('heading', { name: 'Your score is...' })).toBeVisible();
    await page.getByRole('button', { name: 'Accept' }).click();
    await page.goto('https://thewisemangroup.com/');
  //  await page.getByRole('button', { name: 'Accept' }).click();
    await page.locator('#top-menu').getByRole('link', { name: 'Contact Us' }).click();
    await page.getByLabel('What are you interested In?(').selectOption('Keynote');
   

}

module.exports = {
    testLogin
}