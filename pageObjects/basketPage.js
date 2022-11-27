const BasePage = require('../pageObjects/BasePage');

class BasketPage extends BasePage {
  get addItemButton() {
    return '._1Nb4AuC56JY5WAjLZJPxty._3IYaUfydiqtfsor2fsrkvI.g9klqSLnWhCEplrMm75Wl :nth-child(3)';
  }
  get numberOfAddedItems() {
    return '._2C-qwu05PshkSmwAkHK3SL';
  }
  get buttonsBasketArea() {
    return '._20oqvVZY-vccetMef4Z9zX._6llwgf_KbeaSia2saa_I8';
  }
}

module.exports = BasketPage;
