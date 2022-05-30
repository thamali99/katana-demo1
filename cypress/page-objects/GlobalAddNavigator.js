import SalesOrderPage from "./SalesOrderPage"
import CustomerPage from "./CustomerPage"

class GlobalAddNavigator {
    goToSalesOrderPage() {
        cy.get('#globalAdd').click()
        cy.get('#add-sales').click()
        
        return new SalesOrderPage
    }

    goToCustomerPage() {
        cy.get('#globalAdd').click()
        cy.get('#add-customer').click()
        
        return new CustomerPage()
    }
}
export default GlobalAddNavigator