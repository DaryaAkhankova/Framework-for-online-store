const BasePage = require('../pageObjects/basePage');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/pageComponents/header');
const Footer = require('../pageObjects/pageComponents/footer');
const Search = require('../pageObjects/pageComponents/search');
const Login = require('../pageObjects/pageComponents/login');
const ChangeCityPage = require('../pageObjects/changeCityPage');
const ProductsPage = require('../pageObjects/productsPage');
const BrandsPage = require('../pageObjects/brandsPage');
const BasketPage = require('../pageObjects/basketPage');

class PageFactory {
  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.mainPage = new MainPage(page);
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.search = new Search(page);
    this.changeCityPage = new ChangeCityPage(page);
    this.productsPage = new ProductsPage(page);
    this.brandsPage = new BrandsPage(page);
    this.basketPage = new BasketPage(page);
    this.login = new Login(page);
  }
}

module.exports = PageFactory;
