/// <reference types="cypress" />

describe('Footer UI test', () => {
    it('Load home page', () => {
        cy.visit('https://www.emploidakar.com/')
    })

    it('Scroll to footer', () => {
        cy.get('footer').scrollIntoView()
    })

    // ---------------- FOOTER TEST ----------------

    // ----------- FOOTER VISIBILITY -----------
    it('Emploi Dakar', () => {
        cy.get('#text-11 > .widget-title').should('be.visible')
    })

    it('EmploiDakar.com', () => {
        cy.get('#text-5 > .widget-title').should('be.visible')
    })

    it('Astuces Carrières', () => {
        cy.get('#text-8 > .widget-title').should('be.visible')
    })

    it('Boite à Outils', () => {
        cy.get('#text-12 > .widget-title').should('be.visible')
    })


    it('Resume Text', () => {
        cy.get('#text-11 > .textwidget > p').should('be.visible')
    })

    it('A propos link', () => {
        cy.get('#text-5 > .textwidget > :nth-child(1) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/a-propos/")
    })

    it('Nous contacter link', () => {
        cy.get('#text-5 > .textwidget > :nth-child(2) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/nous-contacter/")
    })

    it('CGU link', () => {
        cy.get('#text-5 > .textwidget > :nth-child(3) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/conditions-generales-dutilisation-cgu/")
    })

    it('Tarifs de publication link', () => {
        cy.get('#text-5 > .textwidget > :nth-child(4) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/tarifs-et-conditions-de-publication-des-offres-demploi/")
    })


    it('Formations link', () => {
        cy.get('#text-8 > .textwidget > :nth-child(1) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/formation-en-ligne/")
    })

    it('Modèle de CV link', () => {
        cy.get('#text-8 > .textwidget > :nth-child(2) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/exemple-de-cv/")
    })

    it('CV professionnel link', () => {
        cy.get('#text-8 > .textwidget > :nth-child(3) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/cv-professionnels/")
    })

    it('Candidature spontannée link', () => {
        cy.get('#text-8 > .textwidget > :nth-child(4) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/candidature-spontanee-senegal/")
    })


    it('Lettre de motivation link', () => {
        cy.get('#text-12 > .textwidget > :nth-child(1) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/modeles-lettres-de-motivation/")
    })

    it('Mes alertes emploi link', () => {
        cy.get('#text-12 > .textwidget > :nth-child(2) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/gerer-mes-alertes-emploi-notifications/")
    })

    it('Actualité emploi link', () => {
        cy.get('#text-12 > .textwidget > :nth-child(3) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/actualites/")
    })

    it('Bourses & Concours link', () => {
        cy.get('#text-12 > .textwidget > :nth-child(4) > a').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/stages-bourses-detudes-et-concours/")
    })

})