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
    it('At least 1 job is posted', () => {
        cy.get('.job_listings> li').should('be.visible')
    })

    //Check key words filter
    it('Key words filter', () => {
        cy.get('#search_keywords').should('be.visible')
            .type('developpeur{enter}')
    })

    //Reload page
    it('Reload page', () => {
        cy.reload()
    })

    //Check location filter
    it('Location filter', () => {
        cy.get('#search_location').should('be.visible')
            .type('dakar{enter}')
    })

    //Reload page
    it('Reload page', () => {
        cy.reload()
    })

    //Check categories filter
    it('Categorie filter', () => {
        //Select search field
        cy.get('.select2-search__field').should('be.visible').click()

        //Check the first option 
        cy.get('.select2-results__option').first().should('have.text', 'Accueil - Réception')

        //Check the last option
        cy.get('.select2-results__option').last().should('have.text', 'Transport - Logistique')


    })

    // //Return to job list page
    // it('Reset page link', () => {

    //     cy.get('body')
    //         .then(($body) => {
    //             const result = cy.get('.job_filters > span').should('include', 'Recherche terminée.')

    //             // If result found, Reset page 
    //             if (result = true) {
    //                 cy.get('.reset').click()
    //                 cy.url().should('eq', 'https://www.emploidakar.com/offres-demploi-au-senegal/')
    //             }

    //             // else (no result found), Got to job list page
    //             else {
    //                 cy.get('#menu-item-125914 > .nav-top-link').click()
    //             }
    //         })
    // })

    //Reload page
    it('Reload page', () => {
        cy.reload()
    })

    //Check job type filters
    it('Job type filters', () => {
        cy.get("[type='checkbox']").should('be.checked')
        //Uncheck
        cy.get("[type='checkbox']").uncheck()

        //Check if there is no job
        cy.get('.job_listings> li').should('not.be.visible')
    })

    //Reload page
    it('Reload page', () => {
        cy.reload()
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