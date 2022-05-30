/// <reference types="cypress" />

import CustomerPage from "../page-objects/CustomerPage"
import GlobalAddNavigator from "../page-objects/GlobalAddNavigator"
import SalesPage from "../page-objects/SalesPage"

describe('Create Customer', function () {
    let userData
    let customerData
    let billingData
    let shippingData

    before(function () {
        cy.fixture('testData').then((lData) => {
            userData = lData.user
            customerData = lData.customer
            billingData = lData.billingDetails
            shippingData = lData.shippingDetails

            cy.SignIn(userData.email, userData.password)
        })
    })

    it('Validate Sales Page', function () {
        const salesPage = new SalesPage()
        salesPage.verifyURL()
            .verifyLoggedInUserName(userData.name)
            .verifySalesOrdersTab()
    })

    it('Validate Customer Page', function () {
        const customerPage = new GlobalAddNavigator()
            .goToCustomerPage()
        customerPage.verifyURL()
    })

    it('Add Customer', function () {
        const customerPage = new CustomerPage()
        customerPage.fillFirstname(customerData.firstName)
            .fillLastname(customerData.lastName)
            .fillCompany(customerData.company)
            .verifyCustomerFullName(`${customerData.firstName} ${customerData.lastName}`)
            .fillEmail(customerData.email)
            .fillPhoneNumber(customerData.phone)
            .fillCustomerComment(customerData.comment)
            .openBillingAddressPopup()
            .fillBillingShippingPopupAndSubmit(billingData)
            .openShippingAddressPopup()
            .fillBillingShippingPopupAndSubmit(shippingData)
    })
})
