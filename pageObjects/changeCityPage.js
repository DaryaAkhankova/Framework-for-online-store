const BasePage = require('../pageObjects/BasePage');

class ChangeCityPage extends BasePage {
  get cityСonfigurationModalWindow() {
    return '.d-modal__frame';
  }
  get selectCityButton() {
    return '//*[text()="г. Жлобин"]';
  }
  get goToPurchasesButton() {
    return '.x-button.x-button_primaryFilledWeb7184.x-button_32.x-button_intrinsic-width';
  }
}

module.exports = ChangeCityPage;
