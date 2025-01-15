describe('User - Create Users with Array', () => {
    it('should create multiple users using array', () => {
        cy.request('POST', '/user/createWithArray', [
            {
                id: 1002,
                username: 'user2',
                firstName: 'Alice',
                lastName: 'Smith',
                email: 'alice@example.com',
                password: 'Pass123',
                phone: '555-5678',
                userStatus: 1
            },
            {
                id: 1003,
                username: 'user3',
                firstName: 'Bob',
                lastName: 'Williams',
                email: 'bob@example.com',
                password: 'Pass123',
                phone: '555-9876',
                userStatus: 0
            }
        ]).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
