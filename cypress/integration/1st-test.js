/// <reference types="cypress" />



it('emploi-dakar test', () => {
    cy.visit('https://www.emploidakar.com/')
    cy.get('.text-inner > .button').click()
    cy.get('#menu-item-125914 > .nav-top-link').click()
    cy.get('li.job_listing').first().click()
    cy.contains('Postuler')
        .should('contain', 'Postuler')
        .should('be.visible')

    cy.get('.application_button').click()

    cy.go('back')

})