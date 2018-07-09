var loginCredentials = require('./spec.login');
var recoverPassword = require('./spec.recover_pass');



describe('Should enter credentials', function () {

  

    it('should log in', function () {
        var loginCredentials = new loginCredentials();
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');
        browser.driver.manage().window().maximize();
        loginCredentials.setCredentials('', '');
        browser.sleep(2000);
        loginCredentials.setCredentials('roman.gonzalez@amplemind.com', '123123123');
        browser.sleep(2000);
        loginCredentials.setCredentials('roman.gonzalez@amplemind.com', 'A123123123');
        browser.sleep(2000);
    });

    it('should show recover password page', function () {
        var recoverPassword = new recoverPassword();
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');
        recoverPassword.enterRecoveryPage();
        recoverPassword.setUserEmail('');
        browser.sleep(2000);
        recoverPassword.setUserEmail('roman.gonzalez@amplemindcom');
        browser.sleep(2000);
        recoverPassword.setUserEmail('roman.gonzalez@amplemind.com');
        browser.sleep(2000);
    });
});
