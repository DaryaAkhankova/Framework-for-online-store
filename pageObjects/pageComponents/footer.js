const BasePage = require('../BasePage');

class Footer extends BasePage {
  get changeCountryFooterButton() {
    return '._1AR2XhEV5E8I6iCinUOpAs';
  }
  get changedKzCountryFooterButton() {
    return 'a[href*="lamoda.kz"]';
  }
  get twitterSocialFotterButton() {
    return '.icon.icon_social.icon_social-twitter.icon_social_premium';
  }
  get emailInputField() {
    return '.input__group.input__group_premium-theme .input__input';
  }
  get agreementCheckbox() {
    return '._2ivH7nOTwb0v8oKF82kxsV.x-checkbox__icon';
  }
  get forHerFooterButton() {
    return '._20nEEIIzGJAJ2O85X-WXsl :nth-child(1)';
  }
  get forHimFooterButton() {
    return '._20nEEIIzGJAJ2O85X-WXsl :nth-child(2)';
  }
  get discounMessageLabel() {
    return '.XV6vUssGHeVJP42swMN8k';
  }
  get validationMessageForEmailField() {
    return '.input__validation-message.input__validation-message_premium-theme';
  }
  get kidsFooterButton() {
    return '.x-footer-seo-menu > div > div > div:nth-child(5)';
  }
  get boyClothesFooterButton() {
    return '.x-footer-seo-menu-tab-links a[href*="clothes-dlia-malchikov"]';
  }
  get deliveryInformationButton() {
    return '.details__panel a[href*="delivery"]';
  }
  get cityDeliveryInputField() {
    return '#suggest-city2';
  }
}

module.exports = Footer;
