class MainPage {
 
    clickAccount(){
        cy.visit('https://www.manuka.com.tr/uye-girisi-sayfasi');
        return this;
    }
}

export default MainPage;