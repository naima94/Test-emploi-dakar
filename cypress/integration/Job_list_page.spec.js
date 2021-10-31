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

    //Check CV sample link
    it('CV sample link', () => {
        cy.get('strong > a').should('be.visible')
            .should('have.text', '11 Exemples de demande d’emploi pour décrocher votre prochain job')
            .should('have.attr', 'href', 'https://www.emploidakar.com/demande-d-emploi/')
    })

    it('Share links for social medias', () => {

        cy.get('.col-inner > .social-icons > .facebook').should("have.attr", "href", "https://www.facebook.com/sharer.php?u=https://www.emploidakar.com/offres-demploi-au-senegal/")

        cy.get('.col-inner > .social-icons > .twitter').should("have.attr", "href", "https://twitter.com/share?url=https://www.emploidakar.com/offres-demploi-au-senegal/")

        cy.get('.col-inner > .social-icons > .email').should("have.attr", "href", "mailto:enteryour@addresshere.com?subject=Offre%20d%26rsquo%3BEmploi%20S%C3%A9n%C3%A9gal%20%26%238211%3B%20Offre%20d%26rsquo%3BEmploi%20Dakar&body=Check%20this%20out:%20https://www.emploidakar.com/offres-demploi-au-senegal/")

        cy.get('.pinterest').should("have.attr", "href", "https://pinterest.com/pin/create/button/?url=https://www.emploidakar.com/offres-demploi-au-senegal/&media=https://www.emploidakar.com/wp-content/uploads/2020/01/Talent_5430a808fddffd3a1c3509dc8493cd4d-1024x653.jpg&description=Offre%20d%26rsquo%3BEmploi%20S%C3%A9n%C3%A9gal%20%26%238211%3B%20Offre%20d%26rsquo%3BEmploi%20Dakar")

        cy.get('.col-inner > .social-icons > .linkedin').should("have.attr", "href", "https://www.linkedin.com/shareArticle?mini=true&url=https://www.emploidakar.com/offres-demploi-au-senegal/&title=Offre%20d%26rsquo%3BEmploi%20S%C3%A9n%C3%A9gal%20%26%238211%3B%20Offre%20d%26rsquo%3BEmploi%20Dakar")
    })

    //Check Voir aussi links

    it('Voir aussi ONG link', () => {
        cy.get('.col-inner > :nth-child(9) > a').should('be.visible')
            .should('have.text', 'Liste des ONG qui recrutent au Sénégal')
            .should('have.attr', 'href', 'https://www.emploidakar.com/liste-des-ong-qui-recrutent-au-senegal/')
    })

    it('Voir aussi Entreprises link', () => {
        cy.get('.col-inner > :nth-child(10) > a').should('be.visible')
            .should('have.text', 'Les entreprises qui recrutent au Sénégal')
            .should('have.attr', 'href', 'https://www.emploidakar.com/les-entreprises-qui-recrutent-au-senegal/')
    })

    it('Voir aussi Cand Spont link', () => {
        cy.get('.col-inner > :nth-child(11) > a').should('be.visible')
            .should('have.text', 'Candidature Spontanée à plus de 60 entreprises au Sénégal')
            .should('have.attr', 'href', 'https://www.emploidakar.com/candidature-spontanee-a-plus-de-60-entreprises-au-senegal/')
    })

    it('Voir aussi Call center link', () => {
        cy.get('.col-inner > :nth-child(12) > a').should('be.visible')
            .should('have.text', 'Recrutement Centre d’Appels au Sénégal')
            .should('have.attr', 'href', 'https://www.emploidakar.com/recrutement-centre-dappels-au-senegal/')
    })

    //Scroll Top button test
    it('Scroll Top', () => {
        cy.get('#top-link').scrollIntoView().should('be.visible')
            .should('have.attr', 'href', '#top')
    })

})