describe('Store - Place Order', () => {
  it('should place a valid order', () => {
    cy.request('POST', '/store/order', {
      id: 1,
      petId: 12345,
      quantity: 2,
      shipDate: new Date().toISOString(),
      status: 'placed',
      complete: true
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('placed');
    });
  });

  it('should return 400 or 422 for invalid order data', () => {
    cy.request({
      method: 'POST',
      url: '/store/order',
      failOnStatusCode: false,
      body: {
        id: 2,
        quantity: 0,
        shipDate: new Date().toISOString(),
        complete: false
      }
    }).then((response) => {
      expect([400, 422]).to.include(response.status);
    });
  });
});