class MainPage {
 
    clickAccount(){
        cy.visit('/uye-girisi-sayfasi');
        return this;
    }
}

export default MainPage;