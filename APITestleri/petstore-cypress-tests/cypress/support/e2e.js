import './commands'
Cypress.on('fail', (error, runnable) => {
    cy.screenshot();
    throw error;
});