/// <reference types="cypress" />

describe('Job details page test', () => {

    // Go to the web site home page
    it('Load home page', () => {
        cy.visit('https://www.emploidakar.com/')
    })

    // Go to Jobs list page
    it('Go to Jobs list page', () => {
        cy.get('#menu-item-125914 > .nav-top-link').click()
        cy.url().should('eq', 'https://www.emploidakar.com/offres-demploi-au-senegal/')
    })

    //Check if at least 1 job is posted
    it('At least 1 job is posted', () => {
        cy.get('.job_listings> li').should('be.visible')
    })

    // Select first post details
    it('Load first job posted', () => {
        cy.get('.job_listings> li').first().click()
    })

    // it('Job offer details test', () => {
    //     // Go to job page
    //     cy.get('#menu-item-125914 > .nav-top-link').click()
    //     cy.get('li.job_listing').first().click()
    //     cy.contains('Postuler')
    //         .should('contain', 'Postuler')
    //         .should('be.visible')
    // })

})