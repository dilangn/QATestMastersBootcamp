describe('Pet - Delete Pet by ID', () => {
  beforeEach(() => {
    cy.createPet();
  });

  it('should delete pet by valid ID', () => {
    cy.request('DELETE', '/pet/12345').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should return 404 for non-existent ID', () => {
    cy.request({
      method: 'DELETE',
      url: '/pet/99999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});