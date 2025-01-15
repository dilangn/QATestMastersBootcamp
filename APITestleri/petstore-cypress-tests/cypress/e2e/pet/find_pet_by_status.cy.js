describe('Pet - Find Pets by Status', () => {
    it('should find pets by valid status', () => {
      cy.request('GET', '/pet/findByStatus?status=available').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('should return 400 for invalid status value', () => {
      cy.request({
        method: 'GET',
        url: '/pet/findByStatus?status=invalidstatus',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });