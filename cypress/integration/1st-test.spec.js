/// <reference types="cypress" />



describe('emploi-dakar test', () => {
    it('Job offer test', () => {
        // Go to the web site home page
        cy.visit('https://www.emploidakar.com/')

        cy.get('.text-inner > .button').click()
        // Go to job page
        cy.get('#menu-item-125914 > .nav-top-link').click()
        cy.get('li.job_listing').first().click()
        cy.contains('Postuler')
            .should('contain', 'Postuler')
            .should('be.visible')
    })

})