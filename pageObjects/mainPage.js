const BasePage = require('../pageObjects/BasePage');

class MainPage extends BasePage {
  get womenSectionBanner() {
    return '.js-tizer-gender-select a:nth-child(1)';
  }
  get beautyGoodsButton() {
    return '.swiper-wrapper a[href*="krasota"]';
  }
  get beautyGoodsButton() {
    return '.swiper-wrapper a[href*="krasota"]';
  }
  get mainBreadcrumbsButton() {
    return '#breadcrumbs .swiper-slide.zKL7b51Ghw0ykUhqncL6C.swiper-slide-active';
  }
  get windowLoginArea() {
    return '.ujH3CXKjYq3o0POVdgQN1';
  }
  get brandBreadcrumbsButton() {
    return '.swiper-slide.zKL7b51Ghw0ykUhqncL6C.swiper-slide-next a[href*="brands"]';
  }
}

module.exports = MainPage;
