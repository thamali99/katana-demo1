/// <reference types="cypress" />

import LoginPage from "../page-objects/LoginPage"

Cypress.Commands.add("SignIn", (email, password) => {
    const loginPage = new LoginPage()
    loginPage.navigate().verify()
        .enterEmail(email)
        .enterPassword(password)
        .submit()
})