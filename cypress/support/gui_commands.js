/// <reference types="Cypress" />

Cypress.Commands.add('login',()=>{
    cy.visit('login')

    cy.get("[data-test='email']").type(Cypress.env('user_name'))
    cy.get("[data-test='passwd']").type(Cypress.env('user_password'))

})

