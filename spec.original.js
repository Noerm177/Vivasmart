var user = element(by.css('#mat-input-0'));
var userRcvery = element(by.css('.mat-input-element'));
var pass = element(by.css('#mat-input-1'));
var gobttn = element(by.css('.authentication__button'));
var sendBtn = element(by.css('.authentication__button'));
var rcveryBtn = element(by.css('.authentication-gray-link'));


var txtRcoverPass = element(by.css('.authentication-subtitle'));
var txtInstrc = element(by.css('.authentication__msg h3'));
var tabLotes = element(by.id('mat-tab-label-0-1'));
var tabNewLotes = element(by.id('mat-tab-label-0-2'));
var tabDetailsLotes = element(by.id('mat-tab-label-0-3'));
var tabEditLotes = element(by.id('mat-tab-label-0-4'));
var tabEtapas = element(by.id('mat-tab-label-0-5'));
var tabP_Em = element(by.id('mat-tab-label-0-6'));
var tabEditPlanta = element(by.id('mat-tab-label-0-7'));
var tabPlanta = element(by.id('mat-tab-label-0-8'));
var tabLinea = element(by.id('mat-tab-label-0-9'));
var tabNewLinea = element(by.id('mat-tab-label-0-10'));
var btnProfile = element(by.css('.toolbar-user__image'));
var btnEditProfile = element(by.css('.mr-8px.mat-button.mat-raised-button.mat-primary'));
var btnLogout = element(by.css('.toolbar-user-menu__signout'));
var btnInhaPlanta = element(by.css('.mr-8px.mat-button.mat-raised-button'));
var btnModalPlanta = element(by.css('.mat-raised-button.mat-warn'));
var changePass = element(by.css('.profile-user__link'));
var closeModalPass = element(by.css('.mat-button.mat-primary'));
var tabMain = element(by.css('.mat-tab-header-pagination.mat-tab-header-pagination-after.mat-elevation-z4'));


describe('W1.3 like anybody i want to see recover password', function () {


    it('should show title for recover password', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');
        browser.driver.manage().window().maximize();
        rcveryBtn.click();
        expect(txtRcoverPass.getText()).toEqual('RECUPERA TU CONTRASEÑA');
        browser.sleep(2000);
    });

    it('should fail with empty field', function () {
        //rcveryBtn.click();
        userRcvery.sendKeys('');
        sendBtn.click();
        browser.sleep(3000);
    });

    it('should denied invalid user', function () {
        // rcveryBtn.click();
        userRcvery.clear();
        userRcvery.sendKeys('qa@yopmail.co');
        sendBtn.click();
        browser.sleep(2000);
    });

    it('should validate correct user', function () {
        //rcveryBtn.click();
        userRcvery.clear();
        userRcvery.sendKeys('qa@yopmail.com');
        sendBtn.click();
        expect(txtInstrc.getText()).toEqual('Te hemos enviado instrucciones por correo para restablecer tu contraseña.');
        browser.sleep(2000);
    });



});


describe('W1.1 Like anybody i want to see login page', function () {



    it('should fail with empty fields', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');
        browser.driver.manage().window().maximize();
        browser.sleep(1000);
        user.sendKeys('');
        pass.sendKeys('');
        gobttn.click();
        browser.sleep(2000);
    });

    it('should fail with incorrect user', function () {
        // browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');

        user.sendKeys('qa@yopmail.co');
        pass.sendKeys('123$prueba');
        gobttn.click();
        browser.sleep(2000);
    });

    it('should fail with incorrect password', function () {
        // browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/auth');
        user.clear();
        user.sendKeys('qa@yopmail.com');
        pass.clear();
        pass.sendKeys('123$prueba_NO');
        gobttn.click();
        browser.sleep(2000);
    });

    it('should have log in with correct credentials', function () {
        user.clear();
        user.sendKeys('qa@yopmail.com');
        pass.clear();
        pass.sendKeys('123$prueba');
        gobttn.click();
        browser.sleep(2000);
    });

});



describe('All complete catalogs must be available', function () {

    it('should show me business unit', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/business-unit');
        browser.sleep(3000);
        tabLotes.click();
        browser.sleep(3000);
        tabNewLotes.click();
        browser.sleep(3000);
        tabDetailsLotes.click();
        browser.sleep(3000);
        tabEditLotes.click();
        browser.sleep(3000);
        tabEtapas.click();
        browser.sleep(3000);
        tabP_Em.click();
        browser.sleep(3000);
        tabPlanta.click();
        browser.sleep(3000);
        tabEditPlanta.click();
        browser.sleep(3000);
        tabLinea.click();
        browser.sleep(6000);
        tabNewLinea.click();
        browser.sleep(2000);

    });

    it('should show me activities', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/activities');
        browser.sleep(2000);
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/activities/new');
        browser.sleep(2000);
    });

    it('should show me crops', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/crops');
        browser.sleep(2000);
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/crops/new');
        browser.sleep(2000);
    });

    it('should show me users', function () {
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/users');
        browser.sleep(3000);
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/users/new');
        browser.sleep(3000);
    });

    it('should me user profile', function () {
        btnProfile.click();
        browser.sleep(3000);
        browser.get('http://ec2-13-57-231-235.us-west-1.compute.amazonaws.com/main/profile');
        browser.sleep(3000)
        btnEditProfile.click();
        browser.sleep(3000);
        changePass.click();
        browser.sleep(3000);
        closeModalPass.click();
        browser.sleep(5000);

    });

    it('should me log out', function () {
        btnProfile.click();
        browser.sleep(2000);
        btnLogout.click();
        browser.sleep(2000);
    });

});