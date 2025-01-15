describe('User - Create Single User', () => {
    it('should create a single user successfully', () => {
        cy.request('POST', '/user', {
            id: 1001,
            username: 'user1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'Test123',
            phone: '555-1234',
            userStatus: 1
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
