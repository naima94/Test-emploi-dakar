/// <reference types="cypress" />

describe('Header UI test', () => {
    it('Load home page', () => {
        cy.visit('https://www.emploidakar.com/')
    })

    // ---------------- HEADER TEST ----------------

    // ----------- HEADER VISIBILITY -----------

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


    // ----------- NAV MENU -----------

    it('Search onglet visibility', () => {
        cy.get('.is-small > .icon-search').should('be.visible')
        cy.get('.is-small > .icon-search').realHover()
        cy.get('.search-field').first().should('be.visible')
    })

    it('Offres d’Emploi link visibility', () => {
        cy.contains('Offres d’Emploi').should('be.visible')
    })

    it('Recruters link visibility', () => {
        cy.contains('Recruteurs').should('be.visible')
        //Recruteurs hover
        cy.get('#menu-item-11059 > .nav-top-link').realHover()
        cy.contains('Publier une Offre').should('be.visible')
        cy.contains('Gérer mes offres').should('be.visible')
        cy.contains('Accéder à la CVthèque').should('be.visible')
        cy.contains('Packs & Tarifs de publication').should('be.visible')
    })

    it('Candidats link visibility', () => {
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

    it('Trouver une Formation link visibility', () => {
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

    // ----------- HEADER FONCTIONNALITY -----------

    it('Logo fontionnality', () => {
        cy.get('.header_logo').click()
        //Should return to the home page
        cy.url().should('eq', 'https://www.emploidakar.com/')
    })

    it('Offers fontionnality', () => {
        //Tarifs de publication
        cy.get('#menu-item-136368 > .nav-top-link').click()
        cy.url().should('eq', 'https://www.emploidakar.com/tarifs-et-conditions-de-publication-des-offres-demploi/')

        //Rédaction de CV Professionnel
        cy.get('#menu-item-145436 > .nav-top-link').click()
        cy.url().should('eq', 'https://www.emploidakar.com/service-de-redaction-de-cv-professionnel/')

        //Confiez-nous votre recrutement
        cy.get('#menu-item-138412 > .nav-top-link').click()
        cy.url().should('eq', 'https://www.emploidakar.com/confiez-nous-votre-recrutement/')
    })

    it('Social links should refer to social pages', () => {

        cy.get('[data-label="Facebook"]').should("have.attr", "href", "https://www.facebook.com/EmploiDakarCom/")

        cy.get('[data-label="Instagram"]').should("have.attr", "href", "https://www.instagram.com/emploidakar/")

        cy.get('[data-label="Twitter"]').should("have.attr", "href", "https://twitter.com/emploidakar")

        cy.get('[data-label="E-mail"]').should("have.attr", "href", "mailto:contact@emploidakar.com")

        cy.get('[data-label="LinkedIn"]').should("have.attr", "href", "https://www.linkedin.com/company/11769737/")

        cy.get('[data-label="YouTube"]').should("have.attr", "href", "https://www.youtube.com/channel/UC6LTPYzvUlUk31ShE2Wei1g")

    })

    // ----------- NAV MENU FONCTIONNALITY -----------

    it('Search onglet fonctionnality', () => {
        cy.get('.is-small > .icon-search').click()
        cy.get('input[type="search"].search-field').first().type('developpeur {enter}')

        cy.url().should('include', '=developpeur')
    })

    it('Offres d’Emploi link fonctionnality', () => {
        cy.get('#menu-item-125914 > .nav-top-link').click()
        cy.url().should('eq', 'https://www.emploidakar.com/offres-demploi-au-senegal/')

    })

    it('Recruters links fonctionnality', () => {
        cy.get('#menu-item-11059 > .nav-top-link').should("have.attr", "href", "https://www.emploidakar.com/publier-une-offre-demploi/")

        //Retruteurs hover
        cy.get('#menu-item-11059 > .nav-top-link').realHover()

        cy.contains('Publier une Offre').should("have.attr", "href", "https://www.emploidakar.com/publier-une-offre-demploi/")

        cy.contains('Gérer mes offres').should("have.attr", "href", "https://www.emploidakar.com/gerer-mes-offres/")

        cy.contains('Accéder à la CVthèque').should("have.attr", "href", "https://www.emploidakar.com/acceder-a-la-cvtheque-tous-les-cvs/")

        cy.contains('Packs & Tarifs de publication').should("have.attr", "href", "https://www.emploidakar.com/tarifs-et-conditions-de-publication-des-offres-demploi/")

    })


    it('Candidats links fonctionnality', () => {
        cy.get('#menu-item-699 > .nav-top-link').should("have.attr", "href", "https://www.emploidakar.com/deposer-mon-cv-provoquer-les-recruteurs/")

        //Candidats hover
        cy.get('#menu-item-699 > .nav-top-link').realHover()

        cy.contains('Modèles de CV').should("have.attr", "href", "https://www.emploidakar.com/exemple-de-cv/")

        cy.contains('Lettres de Motivation').should("have.attr", "href", "https://www.emploidakar.com/modeles-lettres-de-motivation/")

        cy.contains('Mes Alertes Emploi').should("have.attr", "href", "https://www.emploidakar.com/gerer-mes-alertes-emploi-notifications/")

        cy.contains('Actualités Emploi').should("have.attr", "href", "https://www.emploidakar.com/actualites/")

        cy.contains('Candidature Spontanée').should("have.attr", "href", "https://www.emploidakar.com/candidature-spontanee-senegal/")

        cy.contains('Bourses & Concours').should("have.attr", "href", "https://www.emploidakar.com/stages-bourses-detudes-et-concours/")

        cy.contains('Entrepreneuriat').should("have.attr", "href", "https://www.emploidakar.com/entrepreneuriat/")

        cy.contains('Recrutement Afrique').should("have.attr", "href", "https://www.emploidakar.com/offre-d-emploi-afrique/")
    })



})