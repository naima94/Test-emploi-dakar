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
        cy.get('.text-inner > .button > span').should('have.text', "Voir toutes les offres d'emploi")
    })

    // ----------- HERO FONCTIONNALITY -----------

    it('Hero button fonctionnality', () => {
        cy.get('.text-inner > .button').should("have.attr", "href", "https://www.emploidakar.com/offres-demploi-au-senegal/")
    })

    // ---------------- CANDIDATES SECTION TEST ----------------------

    it('Candidates section title', () => {
        cy.get(':nth-child(2) > .section-title > .section-title-main').scrollIntoView().should('be.visible')
            .should('have.text', "Optimisez vos chances de recrutement")
    })

    it('Candidates section text', () => {
        cy.get('.sub-heading').should('be.visible')
            .should('have.text', "Décrochez jusqu’à trois fois plus d’entretiens d’embauche avec nos services totalement gratuits.")
    })

    //          Link 1
    it('Postulez en un clic container', () => {
        cy.get('.col-inner > .plain').eq(0).should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/offres-demploi-au-senegal/")
    })

    it('Postulez en un clic img visibility', () => {
        cy.get('.icon-inner > img').eq(0).should('be.visible')
    })

    it('Postulez en un clic visibility', () => {
        cy.get('#col-580897933 > .col-inner > .plain > .icon-box > .icon-box-text > .uppercase').should('be.visible')
            .should('have.text', "Postulez en un clic")
    })

    it('Postulez en un clic text visibility', () => {
        cy.get('#col-580897933 > .col-inner > .plain > .icon-box > .icon-box-text > .fourfeature-item > .text').should('be.visible')
            .should('have.text', "Trouvez le poste qui vous correspond et postulez en un clic gratuitement avec votre CV en ligne.")
    })

    //          Link 2
    it('Soyez le Premier container', () => {
        cy.get('.col-inner > .plain').eq(1).should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/gerer-mes-alertes-emploi-notifications/")
    })

    it('Soyez le Premier img visibility', () => {
        cy.get('.icon-inner > img').eq(1).should('be.visible')
    })

    it('Soyez le Premier visibility', () => {
        cy.get('#col-1443108112 > .col-inner > .plain > .icon-box > .icon-box-text > .uppercase').should('be.visible')
            .should('have.text', "Soyez le Premier")
    })

    it('Soyez le Premier text visibility', () => {
        cy.get('.item-2 > .text').should('be.visible')
            .should('have.text', "Recevez les meilleures opportunités par mail selon la fréquence que vous avez choisie.")
    })

    //          Link 3
    it('Faites-vous chasser container', () => {
        cy.get('.col-inner > .plain').eq(2).should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/deposer-mon-cv-provoquer-les-recruteurs/")
    })

    it('Faites-vous chasser img visibility', () => {
        cy.get('.icon-inner > img').eq(2).should('be.visible')
    })

    it('Faites-vous chasser visibility', () => {
        cy.get('#col-1268517327 > .col-inner > .plain > .icon-box > .icon-box-text > .uppercase').should('be.visible')
            .should('have.text', "Faites-vous chasser")
    })

    it('Faites-vous chasser text visibility', () => {
        cy.get('.icon-box-text > p').should('be.visible')
            .should('have.text', "Déposez gratuitement votre CV et attirez l’attention de centaines de recruteurs de la plateforme.")
    })

    // ---------------- RECRUTEURS SECTION TEST ----------------------

    it('Recruiters section title', () => {
        cy.get('#content > :nth-child(5)').scrollIntoView().should('be.visible')
            .should('have.text', "Publiez vos offres d'emploi sur le site de recrutement n°1 au Sénégal")
    })

    it('Recruiters section img visibility', () => {
        cy.get('.attachment-large').should('be.visible')
    })

    it('Recruiters section subtitle visibility', () => {
        cy.get('.col-inner > h3 > span').should('be.visible')
            .should('have.text', "Vous êtes à la recherche de votre prochaine recrue ?")
    })

    it('Recruiters section text visibility', () => {
        cy.get('.cta-left > p').should('be.visible')
            .should('have.text', "Laissez Emploi Dakar vous trouver les talents les plus pertinents pour vos projets. Gérez vos offres d’emploi, triez les candidature reçues, pré-sélectionnez les meilleurs CV, contactez les candidats directement depuis votre tableau de bord.")
    })

    it('Recruiters section button', () => {
        cy.get('#col-161245470 > .col-inner > .button').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/pourquoi-choisir-emploi-dakar/")
        cy.get('#col-161245470 > .col-inner > .button > span').should('have.text', "Publier une Offre d'Emploi")
    })

    // ---------------- ACTUALITES EMPLOI SECTION TEST ----------------------

    it('Actualités Emploi section title visibility', () => {
        cy.get(':nth-child(8) > .section-title > .section-title-main').scrollIntoView().should('be.visible')
            .should('have.text', "Actualités Emploi")
    })

    it('Actualités Emploi section subtitle visibility', () => {
        cy.get('#content > :nth-child(9)').should('be.visible')
            .should('have.text', "Retrouvez les dernières actualités et tendances Emploi, Recrutement au Sénégal.")
    })

    it('At least 1 Actualités Emploi', () => {
        cy.get('.large-columns-3').should('be.visible')
    })

    // ---------------- NEWSLETTER SECTION TEST ----------------------

    it('Abonnement section text visibility', () => {
        cy.get('.col-inner > p').scrollIntoView().should('be.visible')
            .should('have.text', "Abonnez-vous pour recevoir les meilleures opportunités d’emploi, stages, formations et financement par mail.")
    })

    it('Newsletter section button', () => {
        cy.get('#col-95580342 > .col-inner > .button').should('be.visible')
            .should("have.attr", "href", "https://www.emploidakar.com/newsletter-2/")
        cy.get('#col-95580342 > .col-inner > .button > span').should('have.text', "Je m'abonne")
    })

})