describe('User - Delete User', () => {

    beforeEach(() => {
        cy.createUser();
    });
    
    it('should delete user by username', () => {
        cy.request('DELETE', '/user/user1').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('should return 404 when deleting non-existent user', () => {
        cy.request({
            method: 'DELETE',
            url: '/user/nonexistentuser',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});