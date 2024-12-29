Cypress.Commands.add('screenshotTest', () => {
    const testName = Cypress.mocha.getRunner().test.title
    cy.screenshot(`screenshot-${testName}`)
})

Cypress.Commands.add('fillPracticeFormFieldsAndSubmit', function(){
        cy.get('#firstName').should('be.visible').type('Vitor')
        cy.get('#lastName').type('Silva')
        cy.get('#userEmail').type('VitorSilva@demo.com', { delay: 0 })
        cy.get('label[for="gender-radio-1"]').click();
        cy.get('#userNumber').type('81934563210', {delay: 0})
        cy.get('.subjects-auto-complete__value-container').type('E')
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
})