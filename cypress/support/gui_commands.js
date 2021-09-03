/// <reference types="Cypress" />

Cypress.Commands.add('login',()=>{
    cy.visit('/')

    cy.get("[data-test='email']").type(Cypress.env('user_name'))
    cy.get("[data-test='passwd']").type(Cypress.env('user_password'))
    cy.get("button[type='submit']").click()

})

