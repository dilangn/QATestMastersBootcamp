import BaseLibrary from "../base/BaseLibrary";
import AccountInformationPage from "../pages/AccountInformationPage";
import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage";

describe('Login Tests', { env: { allure: true } }, () => {
    const loginPage = new LoginPage();
    const baseLibrary = new BaseLibrary();
    const mainPage = new MainPage();
    const accountInformationPage = new AccountInformationPage();

    beforeEach(() => {
        cy.allure()
            .epic('Login Suite')
            .feature('Authentication')
            .severity('critical');

        cy.viewport(1920, 1080)
        cy.visit('/uye-girisi-sayfasi')
    })

    it('Başarılı kullanıcı girişi kontrolü', () => {
        cy.allure()
            .story('Positive Login Test')
            .severity('critical')
            .description('Geçerli kullanıcı bilgileriyle başarılı giriş testi');

        // Her test adımını Allure'a kaydet
        cy.allure().startStep('Login sayfasını aç');

        var mail = "fulmilekki@gufum.com"
        var welcomeMessage = "Merhaba Test Test";

        loginPage.fillEmail(mail)
            .fillPassword("rm.rCkEMd2tF5yC")
            .clickLogin()
        baseLibrary.wait(5000)

        mainPage.clickAccount();
        baseLibrary.wait(5000)
        accountInformationPage.accountControl(welcomeMessage)

        cy.allure().endStep();
    })

    it('Başarısız kullanıcı girişi kontrolü', () => {
        cy.allure().feature('Başarısız kullanıcı girişi kontrolü');
        cy.allure().severity('critical');

        cy.allure().startStep('Başarısız kullanıcı girişi kontrolü');

        var mail = "fulmilekki@gufum.com"

        loginPage.fillEmail(mail)
            .fillPassword("test")
            .clickLogin()
            .errorMessageControl("E-mail veya şifre bilgileriniz hatalı.")

        cy.allure().endStep();

    })

    it('Boş karakter kontrolü', () => {
        cy.allure().startStep('Boş karakter kontrolü');

        var mail = " "

        loginPage.fillEmail(mail)
            .clearPassword()
            .clickLogin()
            .errorMessageControl("Giriş bilgileriniz hatalı.")

        cy.allure().endStep();
    })
})