const BasePage = require('../pageObjects/BasePage');

class BaseElements extends BasePage {
  async click(element) {
    await this.page.locator(element).waitFor('visible');
    await this.page.waitForTimeout(1000);
    await this.page.locator(element).click();
  }

  async wait(element) {
    await element.waitForSelector();
    return element.click();
  }

  async check(element) {
    await this.page.locator(element).waitFor('visible');
    await this.page.locator(element).check();
  }

  async unheck(element) {
    await this.page.locator(element).waitFor('visible');
    await this.page.locator(element).unheck();
  }

  async searchForEnteredValue(element, text) {
    await this.page.locator(element).fill(text);
    await this.page.locator(element).press('Enter');
  }

  async fill(element, text) {
    await this.page.locator(element).waitFor('visible');
    await this.page.locator(element).fill(text);
  }

  async hover(element) {
    await this.page.locator(element).waitFor('visible');
    await this.page.locator(element).hover();
  }
}

module.exports = BaseElements;
