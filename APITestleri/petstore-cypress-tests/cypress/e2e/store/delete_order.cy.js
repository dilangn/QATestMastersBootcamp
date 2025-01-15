describe('Store - Delete Order', () => {
    beforeEach(() => {
        cy.request('POST', '/store/order', {
            id: 4,
            petId: 12345,
            quantity: 1,
            shipDate: new Date().toISOString(),
            status: 'placed',
            complete: true
        });
    });

    it('should delete an existing order', () => {
        cy.request('DELETE', '/store/order/4').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('should return 404 when deleting a non-existent order', () => {
        cy.request({
            method: 'DELETE',
            url: '/store/order/99999',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});