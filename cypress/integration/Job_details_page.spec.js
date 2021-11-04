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

    // Select first post to open details
    it('Load first job page', () => {
        cy.get('.job_listings> li').first().click()
    })

    it('Job title visibility', () => {
        cy.get('.entry-title').should('be.visible')
    })

    it('Job type visibility', () => {
        cy.get('.job-type').should('be.visible')
    })

    it('Job location visibility', () => {
        cy.get('.location').should('be.visible')
    })

    it('Job company name visibility', () => {
        cy.get('.name').should('be.visible')
    })

    // it('Job categorie visibility', () => {
    //     cy.get('.job-listing-meta > a').should('be.visible')
    // })

    it('Job description visibility', () => {
        cy.get('.job_description').should('be.visible')
    })

    it('Application link visibility', () => {
        cy.contains('Postuler')
            .should('be.visible')
    })

    it('Alert link', () => {
        cy.get('.job-manager-single-alert-link > a').should('be.visible')
            .should('have.text', "M'envoyer des offres similaires par mail")
            .should('have.attr', 'href').and('include', 'https://www.emploidakar.com/gerer-mes-alertes-emploi-notifications/')
    })

    // ------ NEWSLETTER  ------

    it('Newsletters section', () => {
        cy.get('.message-box-bg-overlay').should('be.visible')

        cy.get('.col-inner').first().should('be.visible')
            .should('have.text', " Recevez les meilleures opportunités par mail.")
    })

    it('Newsletter button', () => {
        cy.get('.col-inner > .button').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/newsletter-2/")
        cy.get('.col-inner > .button > span').should('have.text', "Je m'abonne")
    })


})