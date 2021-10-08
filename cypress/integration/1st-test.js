/// <reference types="cypress" />

it('google test', () => {
    cy.visit('https://www.emploidakar.com/')
    cy.get('.text-inner > .button').click()
    cy.get('#menu-item-125914 > .nav-top-link').click()
    cy.get('li.job_listing').first().click()


})