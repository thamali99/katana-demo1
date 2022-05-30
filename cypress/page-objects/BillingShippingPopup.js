class BillingShippingPopup {
    fillBillingShippingPopupAndSubmit(billingShippingData) {
        cy.get('[data-testid="firstNameTextField"]').clear().type(billingShippingData.firstName)
        cy.get('[data-testid="gridExtended"] input[name="lastName"]').clear().type(billingShippingData.lastName)
        cy.get('[data-testid="gridExtended"] input[name="company"]').clear().type(billingShippingData.company)
        cy.get('[data-testid="gridExtended"] input[name="phone"]').clear().type(billingShippingData.phone)
        cy.get('[data-testid="gridStandard"] input[name="line1"]').clear().type(billingShippingData.address.line1)
        cy.get('[data-testid="gridStandard"] input[name="line2"]').clear().type(billingShippingData.address.line2)
        cy.get('[data-testid="gridStandard"] input[name="city"]').clear().type(billingShippingData.address.city)
        cy.get('[data-testid="gridStandard"] input[name="state"]').clear().type(billingShippingData.address.state)
        cy.get('[data-testid="gridStandard"] input[name="zip"]').clear().type(billingShippingData.address.zip)
        cy.get('[data-testid="gridStandard"] input[name="country"]').clear().type(billingShippingData.address.country)
        cy.get('#submitButton').click()
        return this
    }
}
export default BillingShippingPopup