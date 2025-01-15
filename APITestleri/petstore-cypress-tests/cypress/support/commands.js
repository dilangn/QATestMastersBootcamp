Cypress.Commands.add('createPet', (petId = 12345, petName = 'Max') => {
    cy.request('POST', '/pet', {
        id: petId,
        category: { id: 1, name: 'Dogs' },
        name: petName,
        photoUrls: ['https://example.com/photo1.jpg'],
        tags: [{ id: 10, name: 'Cute' }],
        status: 'available'
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});

Cypress.Commands.add('createOrder', (orderId = 1, petId = 12345, quantity = 1, status = 'placed') => {
    cy.request('POST', '/store/order', {
        id: orderId,
        petId: petId,
        quantity: quantity,
        shipDate: new Date().toISOString(),
        status: status,
        complete: true
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});

Cypress.Commands.add('deleteOrder', (orderId = 1) => {
    cy.request('DELETE', `/store/order/${orderId}`).then((response) => {
        expect(response.status).to.eq(200);
    });
});

Cypress.Commands.add('checkInventory', () => {
    cy.request('GET', '/store/inventory').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('sold');
    });
});

Cypress.Commands.add('createUser', (userData) => {
    cy.request('POST', '/user', {
      id: userData?.id || 1001,
      username: userData?.username || 'user1',
      firstName: userData?.firstName || 'John',
      lastName: userData?.lastName || 'Doe',
      email: userData?.email || 'john.doe@example.com',
      password: userData?.password || 'Test123',
      phone: userData?.phone || '555-1234',
      userStatus: userData?.userStatus || 1
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });