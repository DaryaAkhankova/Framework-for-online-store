const { test, expect } = require('@playwright/test');

const PageFactory = require('../pageObjects/pageFactory.js');
const BaseElements = require('../helpers/baseElements');

test.describe(`test scenarios for Lamoda application from the footer`, function () {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate('https://www.lamoda.by/');
  });

  test('Сheck that Twitter page is opened from the footer', async ({ page, context }) => {
    const element = new PageFactory(page);
    const [twitterPage] = await Promise.all([context.waitForEvent('page'), page.locator(element.footer.twitterSocialFotterButton).click()]);
    await expect(twitterPage).toHaveURL('https://twitter.com/Lamoda_by?from=footer');
  });

  test('Сheck that country in the footer is updated after selecting another country', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.footer.changeCountryFooterButton);
    await I.click(element.footer.changedKzCountryFooterButton);
    await expect(page).toHaveURL('https://www.lamoda.kz/');
  });

  test('Check that discount email is sent after entering a valid email', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.fill(element.footer.emailInputField, 'TestNew123@mail.com');
    await I.click(element.footer.agreementCheckbox);
    await I.click(element.footer.forHerFooterButton);
    await expect(page.locator(element.footer.discounMessageLabel)).toContainText('Письмо с промокодом уже на почте');
  });

  test('Check that discount email is not sent after entering invalid email', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.fill(element.footer.emailInputField, 'TestNew123mail.com');
    await I.click(element.footer.agreementCheckbox);
    await expect(page.locator(element.footer.validationMessageForEmailField)).toHaveText(
      'Пожалуйста, проверьте, правильно ли указан адрес электронной почты.',
    );
    await expect(page.locator(element.footer.forHerFooterButton)).toBeDisabled();
    await expect(page.locator(element.footer.forHimFooterButton)).toBeDisabled();
  });

  test('Check that discount email is not sent when policy agreement is not checked', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.fill(element.footer.emailInputField, 'TestNew123@mail.com');
    await expect(page.locator(element.footer.forHerFooterButton)).toBeDisabled();
    await expect(page.locator(element.footer.forHimFooterButton)).toBeDisabled();
  });
});
