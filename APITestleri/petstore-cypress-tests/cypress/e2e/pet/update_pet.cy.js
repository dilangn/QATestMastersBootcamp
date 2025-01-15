describe('Pet - Update Existing Pet', () => {
  beforeEach(() => {
    cy.createPet(); 
  });

  it('should update an existing pet with valid data', () => {
    cy.request('PUT', '/pet', {
      id: 12345,
      category: { id: 1, name: 'Dogs' },
      name: 'Maximus',
      photoUrls: ['https://example.com/photo2.jpg'],
      tags: [{ id: 10, name: 'Friendly' }],
      status: 'sold',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Maximus');
    });
  });

  it('should return an error for invalid data', () => {
    cy.request({
      method: 'PUT',
      url: '/pet',
      failOnStatusCode: false,
      body: { id: 12345, name: '' },
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});