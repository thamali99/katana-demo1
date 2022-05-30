import GlobalAddNavigator from "../page-objects/GlobalAddNavigator"
import SalesOrderPage from "../page-objects/SalesOrderPage"

describe('Create a Sales order', function () {
    let userData
    let customerData
    let billingData
    let productData
    let trackingData

    before(function () {
        cy.fixture('testData').then((lData) => {
            userData = lData.user
            customerData = lData.customer
            billingData = lData.billingDetails
            productData = lData.productDetails
            trackingData = lData.salesOrderTrackingData

            cy.SignIn(userData.email, userData.password)
        })
    })

    it('Validate Sales Order page', function () {
        const salesOrderPage = new GlobalAddNavigator()
            .goToSalesOrderPage()
            .verifyURL()
    })

    it('Add a Sales Order', function () {
        const salesOrderPage = new SalesOrderPage()
        salesOrderPage.typeCustomerName(`${customerData.firstName} ${customerData.lastName}`)
            .selectFirstItemFromAutoCompleteList()
            .openBillingAddressPopup()
            .addOrEditBillingAddress(billingData)
            .createItem('New Test Item')
            .selectFirstItemFromAutoCompleteList()
            .fillAddNewProductPopup(productData)
            .setDeliveryDateToLastDayOfMonth()
            .setSalesOrderTrackingInfo(trackingData)
            .addAdditionalInfo('Test Comment')
    })
})