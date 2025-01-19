class AccountInformationPage {
 
    accountControl(value){
        cy.get('#fullname')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.eq(value);
        });
      
        return this;
    }

}

export default AccountInformationPage;