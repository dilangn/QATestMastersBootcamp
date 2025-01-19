class LoginPage {

    fillEmail(value) {
        cy.get("#ug-email").type(value);
        return this;
    }

    fillPassword(value) {
        cy.get("#ug-password").type(value);
        return this;
    }

    clickLogin() {
        cy.get("#member-login-btn").click()
        return this;
    }

    errorMessageControl(value) {
        cy.get("#login-form > div > div.fl.col-12.popupInnerBlock > div:nth-child(2) > div > span").should("have.text", value)
        return this;
    }

    requiredMessageControl(value) {
        cy.get("#login-form > div > div.fl.col-12.popupInnerBlock > div:nth-child(2) > div > span").should("have.text", value)
        return this;
    }

    clearEmail() {
        cy.get("#ug-email").clear()
        return this;
    }

    clearPassword() {
        cy.get("#ug-password").clear()
        return this;
    }
}

export default LoginPage;