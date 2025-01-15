describe('Pet - Create New Pet', () => {
    it('should create a new pet with valid data', () => {
      cy.request('POST', '/pet', {
        id: 12345,
        category: { id: 1, name: 'Dogs' },
        name: 'Max',
        photoUrls: ['https://example.com/photo1.jpg'],
        tags: [{ id: 10, name: 'Cute' }],
        status: 'available',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 12345);
      });
    });
  
    it('should return an error for missing required fields', () => {
      cy.request({
        method: 'POST',
        url: '/pet',
        failOnStatusCode: false,
        body: { name: 'NoCategoryPet' },
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });