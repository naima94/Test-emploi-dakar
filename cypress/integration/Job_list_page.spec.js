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

    //Check key words filter
    it('Key words filter', () => {
        cy.get('#search_keywords').should('be.visible')
            .type('developpeur{enter}')
    })

    //Go to job list page
    it('Go to job list page', () => {
        cy.get('#menu-item-125914 > .nav-top-link').click()
    })

    //Check location filter
    it('Location filter', () => {
        cy.get('#search_location').should('be.visible')
            .type('dakar{enter}')
    })

    //Go to job list page
    it('Go to job list page', () => {
        cy.get('#menu-item-125914 > .nav-top-link').click()
    })

    //Check categories filter
    it('Categorie filter', () => {
        cy.get('#search_location').should('be.visible')
            .type('dakar{enter}')
    })

    //Return to job list page
    it('Reset page link', () => {

        cy.get('body')
            .then(($body) => {
                const result = cy.get('.job_filters > span').should('include', 'Recherche terminée.')

                // If result found, Reset page 
                if (result = true) {
                    cy.get('.reset').click()
                    cy.url().should('eq', 'https://www.emploidakar.com/offres-demploi-au-senegal/')
                }

                // else (no result found), Got to job list page
                else {
                    cy.get('#menu-item-125914 > .nav-top-link').click()
                }
            })
    })

    //Check if at least 1 job is posted
    it('At least 1 job is posted', () => {
        cy.get('.job_listings> li').should('be.visible')
    })

    //Check if the 1rst job title is visible
    it('1rst Job title is visible', () => {
        cy.get('.job_listings> li .position > h3').should('be.visible')
    })

    //Check if company name is visible
    it('Company name is visible', () => {
        cy.get('.job_listings> li .company').first().should('be.visible')
    })

    //Check if company logo is visible
    it('Company logo is visible', () => {
        cy.get('.job_listings> li .company_logo').first().should('be.visible')
    })

    //Check if job location is visible
    it('Job location is visible', () => {
        cy.get('.job_listings> li .location').first().should('be.visible')
    })

    //Check if job type is visible
    it('Job type is visible', () => {
        cy.get('.job_listings> li .job-type').first().should('be.visible')
    })

    //Check if job publish date is visible
    it('Job publish date is visible', () => {
        cy.get('.job_listings> li .date > time').first().should('be.visible')
    })
})