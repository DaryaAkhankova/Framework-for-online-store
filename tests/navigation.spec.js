const { test, expect } = require('@playwright/test');

const PageFactory = require('../pageObjects/pageFactory.js');
const BaseElements = require('../helpers/baseElements');

test.describe(`test scenarios for Lamoda application to check the navigation`, function () {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate('https://www.lamoda.by/');
  });

  test('Check that main page is opened after clicking Lamoda label at the top of the page', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.beautyMenubarButton);
    await I.click(element.productsPage.makeUpButton);
    await I.click(element.header.lamodaLogoButton);
    await expect(page).toHaveURL('https://www.lamoda.by/');
  });

  test('Check that page can be switched to the main page using breadcrumbs', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.clothesMenubarButton);
    await I.click(element.productsPage.outerwearButton);
    await I.click(element.mainPage.mainBreadcrumbsButton);
    await expect(page).toHaveURL('https://www.lamoda.by/');
  });

  test('Check that a particular section can be opened from the footer ', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.footer.kidsFooterButton);
    await I.click(element.footer.boyClothesFooterButton);
    await expect(page.locator(element.productsPage.titleOfBrand)).toContainText('Одежда для мальчиков');
    await expect(page).toHaveURL('https://www.lamoda.by/c/1589/clothes-dlia-malchikov/');
  });
});
