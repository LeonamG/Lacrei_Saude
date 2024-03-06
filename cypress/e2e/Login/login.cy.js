///  <reference types="Cypress"/>



describe('teste de login', () => {
    it('deve realizar o login com com sucesso', () => {
        cy.visit ("https://paciente.lacreisaude.com.br/")
        cy.get('#email').type("leonamgo@gmail.com")
        cy.get('#password').type("LEONAMcs@1")
        cy.get('.fgwfJi > .sc-83837fc6-1').click()
        cy.get('.info-message > span').should('contain','No momento, nossos serviços estão disponíveis apenas no estado de São Paulo.')
    });

    it('Validar Login incorreto', () => {
        cy.visit ("https://paciente.lacreisaude.com.br/")
        cy.get('#email').type("leonago@gmail.com")
        cy.get('#password').type("LEONAMcs@1")
        cy.get('.fgwfJi > .sc-83837fc6-1').click()
        cy.get('.sc-2926472a-1 > .sc-c83550c6-0').should('contain','Sua senha e/ou conta está incorreta. Se tiver esquecido a senha, clique em “Esqueci minha senha')
    });


    it('Validar senha incorreta', () => {
        cy.visit ("https://paciente.lacreisaude.com.br/")
        cy.get('#email').type("leonamgo@gmail.com")
        cy.get('#password').type("LEONAMcS@1")
        cy.get('.fgwfJi > .sc-83837fc6-1').click()
        cy.get('.sc-2926472a-1 > .sc-c83550c6-0').should('contain','Sua senha e/ou conta está incorreta. Se tiver esquecido a senha, clique em “Esqueci minha senha')
    });








});

