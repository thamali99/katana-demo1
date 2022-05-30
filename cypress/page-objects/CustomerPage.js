import BillingShippingPopup from "./BillingShippingPopup"

class CustomerPage {
    verifyURL() {
        cy.url().should('include', '/customer')
        return this
    }

    verifyLoggedInUserName(expectedUserName) {
        cy.contains(expectedUserName).should('be.visible')
        return this
    }

    fillFirstname(firstname) {
        cy.get('[data-testid="inputCustomerFirstName"]').first().clear().type(firstname)
        return this
    }

    fillLastname(lastname) {
        cy.get('[data-testid="inputCustomerLastName"]').clear().type(lastname)
        return this
    }

    fillCompany(companyName) {
        cy.get('[data-testid="inputCustomerCompany"]').clear().type(companyName)
        return this
    }

    verifyCustomerFullName(expectedName) {
        cy.get('[name="name"]').should('have.value', expectedName)
        return this
    }

    fillEmail(emailAddress) {
        cy.get('[data-testid="inputCustomerEmail"]').clear().type(emailAddress)
        return this
    }

    fillPhoneNumber(phoneNumber) {
        cy.get('[data-testid="inputCustomerPhone"]').clear().type(phoneNumber)
        return this
    }

    fillCustomerComment(comment) {
        cy.get('[data-testid="inputCustomerComment"]').clear().type(comment)
        return this
    }

    openBillingAddressPopup() {
        cy.get('[data-testid="inputCustomerDefaultBillingAddress"]').click()
        return this
    }

    fillBillingShippingPopupAndSubmit(billingShippingData) {
        const billingShippingPopup = new BillingShippingPopup()
        billingShippingPopup.fillBillingShippingPopupAndSubmit(billingShippingData)
        return this
    }

    openShippingAddressPopup() {
        cy.get('[data-testid="inputCustomerDefaultShippingAddress"]').click()
        return this
    }
}
export default CustomerPage