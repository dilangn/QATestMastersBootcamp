import BaseLibrary from "../base/BaseLibrary";
import AccountInformationPage from "../pages/AccountInformationPage";
import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage";

describe('Login Tests', () => {

    const loginPage = new LoginPage();
    const baseLibrary = new BaseLibrary();
    const mainPage = new MainPage();
    const accountInformationPage = new AccountInformationPage();

    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.manuka.com.tr/uye-girisi-sayfasi', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
                'Referer': 'https://www.manuka.com.tr'
            }
        })
    })

    it('Başarılı kullanıcı girişi kontrolü', () => {

        var mail = "fulmilekki@gufum.com"
        var welcomeMessage = "Merhaba Test Test";

        loginPage.fillEmail(mail)
            .fillPassword("rm.rCkEMd2tF5yC")
            .clickLogin()
        baseLibrary.wait(5000)

        mainPage.clickAccount();
        baseLibrary.wait(5000)
        accountInformationPage.accountControl(welcomeMessage)
    })

    it('Başarısız kullanıcı girişi kontrolü', () => {

        var mail = "fulmilekki@gufum.com"

        loginPage.fillEmail(mail)
            .fillPassword("test")
            .clickLogin()
            .errorMessageControl("E-mail veya şifre bilgileriniz hatalı.")


    })

    it('Boş karakter kontrolü', () => {
        var mail = "fulmilekki@gufum.com"

        loginPage.fillEmail(mail)
            .clearPassword()
            .clickLogin()
            .errorMessageControl("E-mail veya şifre bilgileriniz hatalı.")
    })
})