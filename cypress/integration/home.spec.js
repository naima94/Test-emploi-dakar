/// <reference types="cypress" />

describe('Home page UI test', () => {
    // ---------------- HEADER TEST ----------------
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
        cy.get('.search-field').first().should('be.visible')
    })

    // ----------- NAV MENU -----------

    it('Nav menu visibility', () => {
        cy.contains('Offres d’Emploi').should('be.visible')
    })

    it('Recruters visibility', () => {
        cy.contains('Recruteurs').should('be.visible')
        //Recruteurs hover
        cy.get('#menu-item-11059 > .nav-top-link').realHover()
        cy.contains('Publier une Offre').should('be.visible')
        cy.contains('Gérer mes offres').should('be.visible')
        cy.contains('Accéder à la CVthèque').should('be.visible')
        cy.contains('Packs & Tarifs de publication').should('be.visible')
    })

    it('Candidats visibility', () => {
        cy.contains('Candidats').should('be.visible')
        //Candidats hover
        cy.get('#menu-item-699 > .nav-top-link').realHover()
        cy.contains('Modèles de CV').should('be.visible')
        cy.contains('Lettres de Motivation').should('be.visible')
        cy.contains('Mes Alertes Emploi').should('be.visible')
        cy.contains('Actualités Emploi').should('be.visible')
        cy.contains('Candidature Spontanée').should('be.visible')
        cy.contains('Bourses & Concours').should('be.visible')
        cy.contains('Entrepreneuriat').should('be.visible')
        cy.contains('Recrutement Afrique').should('be.visible')
    })

    it('Trouver une Formation visibility', () => {
        cy.contains('Trouver une Formation').should('be.visible')
        //Trouver une Formation hover
        cy.get('#menu-item-133975 > .nav-top-link').realHover()
        cy.contains('Formations en Français').should('be.visible')
        cy.contains('Free Online Courses').should('be.visible')
        cy.contains('Certifications').should('be.visible')
    })

    it('Publier une Offre d’Emploi visibility', () => {
        cy.contains('Publier une Offre d’Emploi').should('be.visible')
        //Publier une Offre d’Emploi hover
        //cy.get('.header-nav > .header-button-2 > .header-button > .button').first().realHover()
        //.should('have.css', 'color', 'rgb(0,115,177)') //'
    })


    it(' visibility', () => {

    })


})