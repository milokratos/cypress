class NavPage {
    visit() {
        cy.visit('http://localhost:3000/');
    }

    clickOnDashboard() {
        cy.get('li.menu.nav-item button.nav-link')
            .contains('Dashboard')
            .click();
    }

    assertSalesText() {
        cy.get('ul.flex.space-x-2 li')
            .contains('Sales')
            .should('exist');
    }

    hamburguerMenu() {
        cy.get('button[type="button"].collapse-icon')
            .eq(1)
            .click();
    }

    viewAllOption() {
        cy.get('button')
            .contains('View All')
            .should('exist');
    }

    viewDetailsButtonIsPresent() {
        cy.get('button.btn.btn-secondary')
            .contains('View Details')
            .should('exist');
    }

    payNowButtonIsPresent() {
        cy.get('button.btn-success')
            .contains('Pay Now')
            .should('exist');
    }
}

export default new NavPage();
