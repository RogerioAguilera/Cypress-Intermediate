/// <reference types="Cypress" />

describe('Login', () => {
    it('Acessar login com sucesso', () => {
        cy.login()

        cy.get("[data-test='menu-home']").should('contain','a.nav-link.active')

    
        
    });
    
});