describe('Pet - Get Pet by ID', () => {
  beforeEach(() => {
    cy.createPet(); 
  });

  it('should retrieve pet by valid ID', () => {
    cy.request('GET', '/pet/12345').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(12345);
    });
  });

  it('should return 404 for non-existent ID', () => {
    cy.request({
      method: 'GET',
      url: '/pet/99999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});