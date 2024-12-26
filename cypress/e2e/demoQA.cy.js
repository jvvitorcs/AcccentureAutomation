describe('Template spec', function() {
    beforeEach(function() {
      cy.viewport(1920, 1080);
      cy.visit('https://demoqa.com/')
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  })

  it('Practice Form', function() {
    cy.clock()
    cy.get('.category-cards > :nth-child(2)').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
    cy.get('#firstName').type('Vitor')
    cy.get('#lastName').type('Silva')
    cy.get('#userEmail').type('VitorSilva@demo.com', { delay: 0 })
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('81934563210', {delay: 0})
    cy.get('.subjects-auto-complete__value-container').type('E')
    cy.tick(3000)
    cy.get('#react-select-2-option-0').click()
    cy.get('.css-12jo7m5').should('contain.text', 'English')
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('label[for="hobbies-checkbox-3"]').click();
    cy.get('input[type="file"]').should('not.have.value').selectFile('cypress/fixtures/submit.txt')
    const longtext = 'Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test.'
    cy.get('#currentAddress').type(longtext , { delay: 0 })
    cy.get('#state').click()
    cy.get('#react-select-3-option-1').click()
    cy.get('#city').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('#submit').click()
    cy.get('.modal-content').should('be.visible')
    cy.get('#closeLargeModal').click()
    cy.tick(3000)
    cy.get('.modal-content').should('not.exist')
  })
})