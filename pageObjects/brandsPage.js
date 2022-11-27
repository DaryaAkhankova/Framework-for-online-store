const BasePage = require('../pageObjects/BasePage');

class BrandsPage extends BasePage {
  get searchBrandsInputField() {
    return '._1zlsX03DBR3U6MDhnPnB41';
  }
  get titleOfBrand() {
    return '._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title';
  }
  get favoritesBrandButton() {
    return '#brand-block-A nav div:nth-child(1)  div:nth-child(5) div div div';
  }
  get addedBrandLinks() {
    return '.brands__links';
  }
  get addedToFavoriteBrand() {
    return '._24M-fHpTp3a0eXZ4q4eYBZ.brands__link';
  }
  get favoritesBrandsSection() {
    return '.swiper-slide.brands-tabs__slide a[href*="wishlist"]';
  }
  get addedFavoriteBrandButton() {
    return '.icon.icon_heart-product-added';
  }
  get brandsMenubarButton() {
    return '._2YJ8bM-XZ8nHBz4xhPCaW7 a[href*="brands"]';
  }
}

module.exports = BrandsPage;
