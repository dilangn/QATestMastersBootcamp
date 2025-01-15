describe('Store - Inventory Operations', () => {
    it('should retrieve inventory data', () => {
        cy.request('GET', '/store/inventory').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('sold');
        });
    });
});