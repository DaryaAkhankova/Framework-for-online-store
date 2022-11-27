const { test, expect } = require('@playwright/test');

const PageFactory = require('../pageObjects/pageFactory.js');
const BaseElements = require('../helpers/baseElements');

test.describe(`test scenarios for Lamoda application from the header`, function () {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate('https://www.lamoda.by/');
  });

  test('Check that city in the header is updated after selecting another city', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.cityСonfigurationButton);
    await I.click(element.changeCityPage.selectCityButton);
    await I.click(element.changeCityPage.goToPurchasesButton);
    await expect(page.locator(element.header.cityСonfigurationButton)).toContainText('Жлобин');
  });

  test('Check that displayed brand matches the search query in the search field', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.search.searchInputField);
    await I.fill(element.search.searchInputField, 'guess');
    await I.click(element.search.searchButton);
    await expect(page.locator(element.productsPage.titleOfBrand)).toContainText('Guess');
  });

  test('Check that login is not possible without entering email or phone number', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.login.loginToApplicationButton);
    await I.click(element.login.loginButton);
    await expect(page.locator(element.mainPage.windowLoginArea)).toContainText(
      'Упс! Что-то пошло не так, попробуйте обновить страницу или повторите позднее',
    );
  });

  test('Check that error is returned when trying to create an account with an existing email', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.login.loginToApplicationButton);
    await I.click(element.login.createAccountButton);
    await I.fill(element.login.emailInputField, 'test@mail.com');
    await I.fill(element.login.phoneInputButton, '291111111111');
    await I.fill(element.login.passwordInputButton, 'Test123_834738ff');
    await I.fill(element.login.repeatPasswordInputButton, 'Test123_834738ff');
    await I.fill(element.login.firstNameInputButton, 'TestName');
    await I.fill(element.login.LastNameInputButton, 'TestNewName');
    await I.check(element.login.agreementCheckbox);
    await I.click(element.login.signInButton);
    await expect(page.locator(element.login.signInLebelArea)).toContainText(
      'Другая учетная запись зарегистрирована на указанный адрес электронной почты.',
    );
  });
});
