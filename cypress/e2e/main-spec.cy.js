describe('Main Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.intercept('GET', 'https://cliff-jump-api.herokuapp.com/api/v1/cliffs', { fixture: 'cliffs.json' }).as('cliffs')
    })

    it('Should load main URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    })

    it('Should have a nav bar with title and view switch button.', () => {
        cy.get('.nav-title').contains('Send It');
        cy.get('.fav-spot-btn').contains('Fav Spots');
    })

    it('Should load 30 cards with unique data', () => {
      cy.get('.card-box').should('have.length', 30);
      cy.get('.card-box').contains('Radium Hot Springs');
      cy.get('.card-box').contains('Dorset Marble Quarry');
    })

    it('should allow user to filter cards by name', () => {
      cy.get('.filter-name-state').type('Elev');
      cy.get('.card-box').contains('Eleven Mile State Park');
    })

    it('should allow user to filter cards by difficulty', () => {
      cy.get('.dropdown-difficulty').select('Pro');
      cy.get('.card-box').contains('Havasu Falls');
    })

    it('should allow user to save a card to favorites and navigate to a page that displays that card along with a map', () => {
      cy.get('.filter-name-state').type('Elev');
      cy.get('.card-box').contains('Eleven Mile State Park');
      cy.get('.send-btn').click();
      cy.get('.fav-spot-btn').click();
      cy.url().should('eq', 'http://localhost:3000/fav-spots');
      cy.get('.fav-box').contains('Eleven Mile State Park');
    })

    it('should be able to return home from the fav page', () => {
      cy.get('.fav-spot-btn').click();
      cy.get('.fav-spot-btn').click();
      cy.get('.card-box').should('have.length', 30);
      cy.get('.card-box').contains('Radium Hot Springs');
      cy.get('.card-box').contains('Dorset Marble Quarry');
    })
})
