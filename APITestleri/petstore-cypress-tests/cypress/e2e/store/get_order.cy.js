describe('Store - Get Order by ID', () => {
    before(() => {
        cy.request('POST', '/store/order', {
            id: 3,
            petId: 12345,
            quantity: 1,
            shipDate: new Date().toISOString(),
            status: 'placed',
            complete: true
        });
    });

    it('should retrieve an order by valid ID', () => {
        cy.request('GET', '/store/order/3').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(3);
        });
    });

    it('should return 404 for a non-existent order', () => {
        cy.request({
            method: 'GET',
            url: '/store/order/99999',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});