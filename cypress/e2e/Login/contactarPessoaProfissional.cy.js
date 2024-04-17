///  <reference types="Cypress"/>



describe('teste E2E - Pesquisando e contactando Pessoa Profissional', () => {
    it('pesquisar pessoa Profissional', () => {
        cy.visit ("https://paciente.lacreisaude.com.br/")
        cy.get('#email').type("leonamgo@gmail.com")
        cy.get('#password').type("LEONAMcs@1")
        cy.get('.fgwfJi > .sc-83837fc6-1').click()

        // Confirmação que foi Logado com sucesso 
        cy.get('.info-message > span').should('contain','No momento, nossos serviços estão disponíveis apenas no estado de São Paulo.')
        
        //Barra de pesquisa 
        cy.get('#search').type("Medica trans")
        cy.get('.search-button-box > .sc-83837fc6-0 > .sc-83837fc6-1').click()

        //Achando a pessoa Profissional
        cy.get('.button-box-professional > .sc-83837fc6-0 > .sc-83837fc6-1').click()
        cy.get(':nth-child(1) > .button-box > .sc-7a4218c8-1 > .sc-83837fc6-0 > .sc-83837fc6-1').click()
    });

});
