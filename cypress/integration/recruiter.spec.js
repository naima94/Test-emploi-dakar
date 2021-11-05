/// <reference types="cypress" />

describe('emploi-dakar test', () => {
    beforeEach('Visit web site qnd go to the recruiter page', () => {
        cy.visit('https://www.emploidakar.com/')

        cy.get('#menu-item-11059 > .nav-top-link').click()
    })

    it('Page title', () => {
        cy.get('.entry-title').should('be.visible')
            .should('have.text', 'Publier une Offre d’Emploi')
    })

    it('label 1', () => {
        cy.get('.fieldset-login_required > label').should('be.visible')
            .should('have.text', 'Vous avez déjà un compte ?')
    })

    it('label 2', () => {
        cy.get('.fieldset-create_account_email > label').should('be.visible')
            .should('have.text', 'Votre adresse mail')
    })

    it('label 3', () => {
        cy.get('.fieldset-create_account_password > label').should('be.visible')
            .should('have.text', 'Mot de passe')
    })

    it('label 4', () => {
        cy.get('.fieldset-create_account_password_verify > label').should('be.visible')
            .should('have.text', 'Vérifier le mot de passe')
    })

    it('label 5', () => {
        cy.get('.fieldset-job_title > label').should('be.visible')
            .should('have.text', 'Nom du poste')
    })

    it('label 6', () => {
        cy.get('.fieldset-job_location > label').should('be.visible')
            .should('have.text', 'Lieu du poste (optionnel)')
    })

    it('label 7', () => {
        cy.get('.fieldset-job_type > label').should('be.visible')
            .should('have.text', 'Type de poste')
    })

    it('label 8', () => {
        cy.get('.fieldset-job_category > label').should('be.visible')
            .should('have.text', 'Catégorie du poste')
    })

    it('label 9', () => {
        cy.get('.fieldset-job_description > label').should('be.visible')
            .should('have.text', 'Description')
    })

    it('label 10', () => {
        cy.get('.fieldset-application > label').should('be.visible')
            .should('have.text', 'Email/URL de candidature')
    })

    it('Company title', () => {
        cy.get('h2').should('be.visible')
            .should('have.text', 'Détails de  société')
    })

    it('label 11', () => {
        cy.get('.fieldset-company_name > label').should('be.visible')
            .should('have.text', "Nom de l'entreprise")
    })

    it('label 12', () => {
        cy.get('.fieldset-company_website > label').should('be.visible')
            .should('have.text', 'Site (optionnel)')
    })

    it('label 13', () => {
        cy.get('.fieldset-company_tagline > label').should('be.visible')
            .should('have.text', 'Slogan (optionnel)')
    })

    it('label 14', () => {
        cy.get('.fieldset-company_logo > label').should('be.visible')
            .should('have.text', 'Logo (optionnel)')
    })

    // Sign inh

    it('Sign in', () => {
        cy.get('#create_account_email').should('be.visible')
            .type('darkylouve@gmail.com{enter}')
    })

})