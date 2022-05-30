class LoginPage {
    navigate() {
        cy.visit('/login')
        return this
    }

    verify() {
        cy.title().should('eq', 'Sign In | Manufacturing ERP — Katana')
        cy.location('protocol').should('eq', 'https:')
        return this
    }

    enterEmail(emailAddress) {
        cy.get('form').within(($form) => {
            cy.get('input[type = "email"]').clear().type(emailAddress)
        })
        return this
    }

    enterPassword(password) {
        cy.get('form').within(($form) => {
            cy.get('input[type = "password"]').clear().type(password)
        })
        return this
    }

    submit() {
        cy.get('form').within(($form) => {
            cy.root().submit()
        })
        return this
    }
}
export default LoginPage