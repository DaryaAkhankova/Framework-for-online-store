const BasePage = require('../pageObjects/BasePage');

class ProductsPage extends BasePage {
  get productСard() {
    return '.grid__catalog >div:nth-child(1)';
  }
  get addToBasketButton() {
    return '.x-button.x-button_primaryPremium.x-button_48._2MtUVnOoUTockjftJwaaWe';
  }
  get titleOfBrand() {
    return '._385amISN8VbbsCgDXdxEO8';
  }
  get titleOfAddedItemsToBasketWindow() {
    return '.d-modal__header';
  }
  get makeUpButton() {
    return '._3P38oCxaBjglpTQ0GWZ6WX.FwdYts3pe0b12qroWey-8 :nth-child(6)';
  }
  get jeansButton() {
    return '._3P38oCxaBjglpTQ0GWZ6WX.FwdYts3pe0b12qroWey-8 :nth-child(6)';
  }
  get outerwearButton() {
    return '._3P38oCxaBjglpTQ0GWZ6WX.FwdYts3pe0b12qroWey-8 :nth-child(5)';
  }
  get favoritesButton() {
    return '.icon.icon_heart-product';
  }
  get loginWindow() {
    return '.d-modal__content';
  }
  get continueShoppingButton() {
    return '.x-button.x-button_secondaryFilledWeb7184';
  }
  get windowAddedItemsToBasket() {
    return '.d-modal.d-modal_nav-style_close.d-modal_default .d-modal__frame';
  }
  get goToBasketButton() {
    return '.x-button.x-button_primaryFilledWeb7184.x-button_32.x-button_link';
  }
  get colorFilterButton() {
    return 'div._3tq_WFTW_6J2uslyznIzrK div:nth-child(3) > div';
  }
  get checkboxFilterButton() {
    return 'div:nth-child(1) > div > div > div._1miTFB0zeCCHFYVTXRv4vG > div > span';
  }
  get applyFilterButton() {
    return '.x-button.x-button_primaryNewFilled';
  }
  get brandFilterButton() {
    return 'div._3tq_WFTW_6J2uslyznIzrK div:nth-child(5) > div';
  }
  get searchBrandInputField() {
    return '.yJXBmRBdAVufRkRuudWJ3';
  }
  get brandFilterCheckbox() {
    return '._3W__UeJXrgnzPl9XXEHDBf';
  }
}

module.exports = ProductsPage;
