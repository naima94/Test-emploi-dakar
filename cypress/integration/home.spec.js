/// <reference types="cypress" />

describe('Home page', () => {
    it('Load home page', () => {
        cy.visit('https://www.emploidakar.com/')
    })
    // ---------------- HERO TEST ----------------------

    // ----------- HERO VISIBILITY -----------

    it('Banner image visibility', () => {
        cy.get('.banner-bg .fill').should('be.visible')
    })


    it('Hero text visibility', () => {
        cy.get('.text-inner > h3 > span').should('be.visible').should('have.text', 'Trouvez un emploi à la hauteur de vos ambitions')
        cy.get('p > span').should('be.visible').should('have.text', 'Faites-vous recruter dès aujourd’hui ! Des centaines d’offres d’emploi et stage vous attendent…')
    })

    it('Hero button visibility', () => {
        cy.get('.text-inner > .button').should('be.visible')
        cy.get('.text-inner > .button > span').should('have.text', 'Voir toutes les offres d’emploi')
    })

    // ----------- HERO FONCTIONNALITY -----------

    it('Banner image fontionnality', () => {

    })
})