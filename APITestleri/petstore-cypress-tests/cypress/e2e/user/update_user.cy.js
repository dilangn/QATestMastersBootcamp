describe('User - Update User', () => {
    beforeEach(() => {
        cy.createUser();
    });
    
    it('should update user information', () => {
      cy.request('PUT', '/user/user1', {
        id: 1001,
        username: 'user1',
        firstName: 'John Updated',
        lastName: 'Doe Updated',
        email: 'john_updated@example.com',
        password: 'NewPass123',
        phone: '555-0000',
        userStatus: 1
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });