import BillingShippingPopup from "./BillingShippingPopup"

class SalesOrderPage {
    verifyURL() {
        cy.url().should('include', '/salesorder')
        return this
    }

    verifySalesOrderHeading(expectedHeading) {
        cy.get('[data-testid="header-name-salesOrder"]').contains(expectedHeading).should('be.visible')
        return this
    }

    verifySalesOrdersLinkSelected() {
        cy.get('#salesLink')
            .should('be.visible')
            .should('have.class', 'Mui-selected')
            .within(() => {
                cy.get('span.MuiTab-wrapper')
                    .contains('Sales')
            })
        return this
    }

    openBillingAddressPopup() {
        cy.get('[data-testid="inputSalesOrderBillingAddress"]').click()
        return this
    }

    addOrEditBillingAddress(newBillingAddress) {
        const billingShippingPopup = new BillingShippingPopup()
        billingShippingPopup.fillBillingShippingPopupAndSubmit(newBillingAddress)
        return this
    }

    typeCustomerName(customerName) {
        cy.get('[placeholder="Search or create customer"]').type(customerName)
        return this
    }

    selectFirstItemFromAutoCompleteList() {
        cy.intercept('/api/customer-addresses*').as('getCustomers')
        cy.get('ul.MuiAutocomplete-listbox li', { timeout: 10000 }).click()
        cy.wait('@getCustomers').its('response.statusCode').should('eq', 200)
        return this
    }

    openNewBillingAddressPopup() {
        cy.get('[data-testid="address-field-new"]').click()
        return this
    }

    createItem(itemName) {
        cy.get('[data-testid="variant-cell-renderer"]').type(itemName)
        return this
    }

    fillAddNewProductPopup(productData) {
        cy.get('[placeholder="Select or create unit of measure"]').click()
        cy.get('.quickAddItemUom input').type('kg')
        cy.get('div[role="tooltip"] > div:nth-child(1)').click()
        cy.get('div.quickAddProductCode input').type(productData.variantCode)
        cy.get('div.quickAddItemSalesPrice input').type(productData.salesPrice)
        cy.intercept('/api/salesOrderRows').as('getSORows')
        cy.get('div.MuiDialogActions-root').contains('Done').click()
        cy.wait('@getSORows').its('response.statusCode').should('eq', 200)
        return this
    }

    setDeliveryDateToLastDayOfMonth() {
        cy.get("input[name='deliveryDate']").click()
        cy.get('div.MuiPickersBasePicker-container div.MuiPickersCalendar-week:last-child').contains('30').click()
        return this
    }

    setSalesOrderTrackingInfo(trackingInfo) {
        cy.get('[data-testid="iconEdit"]').click()
        cy.get('[name="trackingNumber"]').type(trackingInfo.trackingNo)
        cy.get('[name="trackingNumberUrl"]').type(trackingInfo.trackingUrl)
        cy.get('[data-testid="buttonSubmitTrackingNumber"]').should('be.visible').click()
        return this
    }

    addAdditionalInfo(comment) {
        cy.get('[data-placeholder="Type comment here"]').type(comment)
        return this
    }
}
export default SalesOrderPage