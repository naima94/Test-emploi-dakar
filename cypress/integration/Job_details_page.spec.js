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

    it('Alert link', () => {
        cy.get('.job-manager-single-alert-link > a').should('be.visible')
            .should('have.text', "M'envoyer des offres similaires par mail")
            .should('have.attr', 'href').and('include', 'https://www.emploidakar.com/gerer-mes-alertes-emploi-notifications/')
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



})