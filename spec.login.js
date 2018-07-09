var LoginCredentials = function () {

    var nameInput = element(by.css('#mat-input-0'));
    var passInput = element(by.css('#mat-input-1'));
    var btnLogin = element(by.css('.authentication__button'));
    
    this.setCredentials = function (nameUser, passUser) {

        nameInput.clear().sendKeys(nameUser);
        passInput.clear().sendKeys(passUser);
        return btnLogin.click();
    };
};
module.exports = new  LoginCredentials();


