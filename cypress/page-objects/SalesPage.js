import SalesOrderPage from "./SalesOrderPage"

class SalesPage {
    verifyURL() {
        cy.url().should('include', '/sales')
        return this
    }

    verifyLoggedInUserName(expectedUserName) {
        cy.contains(expectedUserName).should('be.visible')
        return this
    }

    verifySalesOrdersTab() {
        cy.get('#salesLink').contains('Sales orders').should('be.visible')
        return this
    }

    getSOByCustomerName(customerName){
        cy.get('[col-id="customerName"]',{ timeout: 15000 }).contains(customerName).click()
        return new SalesOrderPage()
    }
}
export default SalesPage