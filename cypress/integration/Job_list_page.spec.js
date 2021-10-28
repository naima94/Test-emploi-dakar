/// <reference types="cypress" />

describe('Jobs list page test', () => {
    // Go to the web site home page
    it('Load home page', () => {
        cy.visit('https://www.emploidakar.com/')
    })

    // Go to Jobs list page
    it('Load home page', () => {
        cy.get('#menu-item-125914 > .nav-top-link').click()
        cy.url().should('eq', 'https://www.emploidakar.com/offres-demploi-au-senegal/')
    })

    //Check page title
    it('Page title visibility', () => {
        cy.get('.entry-title').should('be.visible')
            .should('have.text', "Offre d’Emploi Sénégal – Offre d’Emploi Dakar")
    })

    //Check page subtitle
    it('Page subtitle visibility', () => {
        cy.get('.col-inner > :nth-child(2)').should('be.visible')
            .should('have.text', "Toutes les Offres d’Emploi à Dakar et partout au Sénégal")
    })




    //Check if at least 1 job is posted
    it('At least 1 job exist', () => {
        cy.get('.post-146656 > a').should('be.visible')
    })

    //Check if this job title is visible
    it('Job title is visible', () => {
        cy.get('.post-146656 > a > .position > h3').should('be.visible')
    })

    //Check if company name is visible
    it('Company name is visible', () => {
        cy.get('.post-146656 > a > .position > .company > strong').should('be.visible')
    })

    //Check if company logo is visible
    it('Company logo is visible', () => {
        cy.get('.post-146656 > a > .company_logo').should('be.visible')
    })

    //Check if job location is visible
    it('Job location is visible', () => {
        cy.get('.post-146656 > a > .location').should('be.visible')
    })

    //Check if job type is visible
    it('Job type is visible', () => {
        cy.get('.post-146656 > a > .meta > .job-type').should('be.visible')
    })

    //Check if job publish date is visible
    it('Job publish date is visible', () => {
        cy.get('.post-146656 > a > .meta > .date > time').should('be.visible')
    })
})