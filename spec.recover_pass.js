var recoverPassPage = function () {
    var userRecoveryBox = element(by.css('.mat-input-element'));
    var sendBtn = element(by.css('.authentication__button')), forgotPassBtn = element(by.css('.authentication-gray-link'));


    this.setUserEmail = function (userRecoverEmail) {
        userRecoveryBox.clear().sendKeys(userRecoverEmail);
        return sendBtn.click();
    };

    this.enterRecoveryPage = function () {
        return forgotPassBtn.click();
    };

};
module.exports = new recoverPassPage();