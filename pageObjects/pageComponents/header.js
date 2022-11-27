const BasePage = require('../BasePage');

class Header extends BasePage {
  get cityСonfigurationButton() {
    return '._2f5HAC8BA-n1KuEwYHsF-j';
  }
  get beautyMenubarButton() {
    return '._2YJ8bM-XZ8nHBz4xhPCaW7 a[href*="krasota"]';
  }
  get accessoriesMenubarButton() {
    return '._2YJ8bM-XZ8nHBz4xhPCaW7 a[href*="aksessuary"]';
  }
  get clothesMenubarButton() {
    return '._2YJ8bM-XZ8nHBz4xhPCaW7 a[href*="clothes"]';
  }
  get brandsMenubarButton() {
    return '._2YJ8bM-XZ8nHBz4xhPCaW7 a[href*="brands"]';
  }
  get lamodaLogoButton() {
    return '.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._1rQf3AfsjRMMXytDDkQq94';
  }
  get favoritesBrandsSection() {
    return '.swiper-slide.brands-tabs__slide a[href*="wishlist"]';
  }
}

module.exports = Header;
