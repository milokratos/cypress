import NavPage from '../pages/navigation';

beforeEach(() => {
    NavPage.visit();
})
describe('Dashboard Tests', () => {

    it('Should click on Dashboard and make sure Sales is present', () => {
        cy.viewport(1920, 1080);
        NavPage.clickOnDashboard();
        NavPage.assertSalesText();
    });

    it('Check for Pay Now Button', () => {
        cy.viewport(1920, 1080);
        NavPage.clickOnDashboard();
        NavPage.payNowButtonIsPresent();
    });

    it('Check for View All Button', () => {
        cy.viewport(1920, 1080);
        NavPage.clickOnDashboard();
        NavPage.viewAllOption();
    });

    it('Check for view details option', () => {
        cy.viewport(1920, 1080);
        NavPage.clickOnDashboard();
        NavPage.viewDetailsButtonIsPresent();
    });

});
