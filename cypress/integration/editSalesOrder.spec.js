import SalesOrderPage from "../page-objects/SalesOrderPage"
import SalesPage from "../page-objects/SalesPage"

describe('Createa salesorder', function () {
    let userData
    let salesOrderData
    let editBillingData

    before(function () {
        cy.fixture('testData').then((lData) => {
            userData = lData.user
            salesOrderData = lData.salesOrderDetails
            editBillingData = lData.editBillingDetails

            cy.SignIn(userData.email, userData.password)
        })
    })


    it('Select a Sales Order', function () {
        const salesPage = new SalesPage()
        salesPage.getSOByCustomerName(salesOrderData.customerName)

        const salesOrderPage = new SalesOrderPage()
        salesOrderPage.verifyURL()
            .verifySalesOrderHeading(`${salesOrderData.salesOrderNumber} ${salesOrderData.customerName}`)
            .verifySalesOrdersLinkSelected()
    })

    it('Edit Billing Address', function () {
        const salesOrderPage = new SalesOrderPage()
        salesOrderPage.openBillingAddressPopup()
            .addOrEditBillingAddress(editBillingData)
    })
})

