describe('User - Login and Logout', () => {
    beforeEach(() => {
        cy.createUser();
    });
    
    it('should login successfully', () => {
      cy.request('GET', '/user/login', {
        qs: {
          username: 'user1',
          password: 'Test123'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.include('logged in user session');
      });
    });
  
    it('should logout successfully', () => {
      cy.request('GET', '/user/logout').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });