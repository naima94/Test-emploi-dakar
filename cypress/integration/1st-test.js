/// <reference types="cypress" />

it('google test', () => {
    cy.visit('https://www.emploidakar.com/')
    cy.get('.text-inner > .button').click()
    cy.wait(5000)
    cy.get('#menu-item-125914 > .nav-top-link').click({
        scrollBehavior
    })
})