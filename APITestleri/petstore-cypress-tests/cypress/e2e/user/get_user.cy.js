describe('User - Get User by Username', () => {
    beforeEach(() => {
        cy.createUser();
    });
    
    it('should retrieve user by valid username', () => {
      cy.request('GET', '/user/user1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.username).to.eq('user1');
      });
    });
  
    it('should return 404 for non-existent user', () => {
      cy.request({
        method: 'GET',
        url: '/user/unknownUser',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });