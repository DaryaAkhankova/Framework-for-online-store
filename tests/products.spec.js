const { test, expect } = require('@playwright/test');

const PageFactory = require('../pageObjects/pageFactory.js');
const BaseElements = require('../helpers/baseElements');

test.describe(`test scenarios for Lamoda application to check adding products and filtering`, function () {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate('https://www.lamoda.by/');
  });

  test('Сheck that item is added to the basket', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.womenSectionBanner);
    await I.click(element.mainPage.beautyGoodsButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await expect(page.locator(element.productsPage.titleOfAddedItemsToBasketWindow)).toHaveText('Товар добавлен в корзину');
  });

  test('Сheck that adding a product to favorites requires a login', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.accessoriesMenubarButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.favoritesButton);
    await expect(page.locator(element.productsPage.loginWindow)).toBeVisible();
  });

  test('Сheck that products of the selected brand are returned after searching by brand', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.brandsMenubarButton);
    await I.searchForEnteredValue(element.brandsPage.searchBrandsInputField, 'michael kors');
    await expect(page.locator(element.brandsPage.titleOfBrand)).toContainText('Michael Kors');
  });

  test('Сheck that brand is added to the favorites section after clicking favorite button', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.brandsMenubarButton);
    await I.click(element.brandsPage.favoritesBrandButton);
    await I.click(element.mainPage.brandBreadcrumbsButton);
    await I.click(element.brandsPage.favoritesBrandsSection);
    await expect(page.locator(element.brandsPage.addedToFavoriteBrand)).toBeVisible();
  });

  test('Сheck that shopping cart window closes after clicking continue shopping button', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.accessoriesMenubarButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await I.click(element.productsPage.continueShoppingButton);
    await expect(page.locator(element.productsPage.windowAddedItemsToBasket)).toBeHidden();
  });

  test('Check that brand can be searched and applied from the brand filter', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.clothesMenubarButton);
    await I.click(element.productsPage.jeansButton);
    await I.click(element.productsPage.brandFilterButton);
    await I.fill(element.productsPage.searchBrandInputField, 'b.style');
    await I.click(element.productsPage.brandFilterCheckbox);
    await I.click(element.productsPage.applyFilterButton);
    await expect(page.locator(element.productsPage.brandFilterButton)).toContainText('Бренд B.Style');
  });

  test('Сheck that the number of items in the basket has increased after clicking the add button ', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.womenSectionBanner);
    await I.click(element.mainPage.beautyGoodsButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await I.click(element.productsPage.goToBasketButton);
    await I.hover(element.basketPage.buttonsBasketArea);
    await I.click(element.basketPage.addItemButton);
    await expect(page.locator(element.basketPage.numberOfAddedItems)).toHaveText('2 шт.');
  });

  test('Check that color filter is applying when searching for a product in the catalog ', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.clothesMenubarButton);
    await I.click(element.productsPage.jeansButton);
    await I.click(element.productsPage.colorFilterButton);
    await I.check(element.productsPage.checkboxFilterButton);
    await I.click(element.productsPage.applyFilterButton);
    await expect(page.locator(element.productsPage.colorFilterButton)).toContainText('Цвет бежевый');
  });
});
