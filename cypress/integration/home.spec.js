/// <reference types="cypress" />

describe('Home page UI test', () => {
    it('Load home page', () => {
        cy.visit('https://www.emploidakar.com/')
    })

    it('Logo visibility', () => {
        cy.get('.header_logo').should('be.visible')
    })

    it('Offers visibility', () => {
        cy.contains('Tarifs de publication').should('be.visible')
        cy.contains('Rédaction de CV Professionnel').should('be.visible')
        cy.contains('Confiez-nous votre recrutement').should('be.visible')
    })

    it('Social links visibility', () => {
        cy.get('.flex-right > .nav > .html > .social-icons > .facebook > .icon-facebook').should('be.visible')
        cy.get('.flex-right > .nav > .html > .social-icons > .instagram > .icon-instagram').should('be.visible')
        cy.get('.flex-right > .nav > .html > .social-icons > .twitter > .icon-twitter').should('be.visible')
        cy.get('.flex-right > .nav > .html > .social-icons > .email > .icon-envelop').should('be.visible')
        cy.get('.flex-right > .nav > .html > .social-icons > .linkedin > .icon-linkedin').should('be.visible')
        cy.get('.flex-right > .nav > .html > .social-icons > .linkedin > .icon-linkedin').should('be.visible')
    })

    it('Search onglet visibility', () => {
        cy.get('.is-small > .icon-search').should('be.visible')
        cy.get('.is-small > .icon-search').realHover()
        //cy.get('.nav-dropdown .nav-dropdown-default').should('be.visible')
        //cy.get('.search-field').first().should('be.visible')
    })

    it(' visibility', () => {

    })

    it(' visibility', () => {

    })



})