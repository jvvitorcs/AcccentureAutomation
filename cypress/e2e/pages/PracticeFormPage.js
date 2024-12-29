/************************
This class contains methods to interact with the Practice Form section of the demoQA app. 
It provides functionality to navigate to the form, fill out fields (support/commands.js), submit the form, 
and verify the successful form submission through modal visibility and closing.
************************/

class PracticeFormPage {    
    navigateToPracticeForm() {
      cy.get('.category-cards > :nth-child(2)').click()
      cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
    }  
    fillAndSubmitForm() {
        cy.fillPracticeFormFieldsAndSubmit()
    }
    verifySubmission() {
        cy.get('.modal-content').should('be.visible')
        cy.screenshotTest()
        cy.get('#closeLargeModal').click()
        cy.get('.modal-content').should('not.exist')
    }
  }
  export default new PracticeFormPage()