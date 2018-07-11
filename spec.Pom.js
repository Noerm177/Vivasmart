var loginCredentials = require('./spec.login.js');
var recoverPassword = require('./spec.recover_pass.js');


describe('Should enter credentials', function () {

    it('should log in', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');
        browser.driver.manage().window().maximize();
        new loginCredentials.setCredentials('','');
        browser.sleep(2000);
        new loginCredentials.setCredentials('noe.ruvalcaba@amplemind.com', 'pass$123');
        browser.sleep(2000);
        new loginCredentials.setCredentials('noe.ruvalcaba@amplemind.com', 'pass$123');
        browser.sleep(2000);
    });

    it('should show recover password page', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');
        new recoverPassword.enterRecoveryPage();
        new recoverPassword.setUserEmail('');
        browser.sleep(2000);
        new recoverPassword.setUserEmail('noe.ruvalcaba@amplemind.com');
        browser.sleep(2000);
        new recoverPassword.setUserEmail('noe.ruvalcaba@amplemind.com');
        browser.sleep(2000);
    });

});
