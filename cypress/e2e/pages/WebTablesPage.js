/************************
This class contains methods to interact with the Web Tables section of the demoQA app. 
Including navigation, registration, editing, and deletion of entries.
And the dynamic creation and deletion of multiple registrations.
************************/

class WebTablesPage {
    navigateToWebTables() {
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    }
    RegistrationFormTable() {
        cy.get('#addNewRecordButton').click({ force: true })
        cy.get('#firstName').should('be.visible').type('Vitor')
        cy.get('#lastName').type('Silva')
        cy.get('#userEmail').type('VitorSilva@demo.com')
        cy.get('#age').type('25')
        cy.get('#salary').type('1300')
        cy.get('#department').type('QA')   
        cy.get('#submit').click()     
    }
    EditRegistrationFormTable() {        
        cy.get('#edit-record-4').should('be.visible').click({ force: true })        
        cy.get('#firstName').should('be.visible').clear().type('Joao')
        cy.get('#lastName').clear().type('Correia')
        cy.get('#userEmail').clear().type('JoaoCorreia@demo.com')
        cy.get('#age').clear().type('30')
        cy.get('#salary').clear().type('1500')
        cy.get('#department').clear().type('Dev')   
        cy.screenshotTest()
        cy.get('#submit').click()
    }
    DeleteRegistration() {        
        cy.get('#delete-record-4').should('be.visible').click()
        cy.get('#delete-record-4').should('not.exist')
    }
    RegistrationFormTableDynamically() {
        for (let i = 1; i <= 12; i++) {            
            cy.get('#addNewRecordButton').should('be.visible').click()            
            cy.get('#firstName').should('be.visible').type(`User${i}`)
            cy.get('#lastName').type(`LastName${i}`)
            cy.get('#userEmail').type(`user${i}@example.com`, { delay: 0 })
            cy.get('#age').type(`${20 + i}`)
            cy.get('#salary').type(`${1000 + i * 100}`)
            cy.get('#department').type(`Department${i}`)
            cy.get('#submit').click()        
        }
    }
    DeleteNewRegistrations(){
        cy.get('select[aria-label="rows per page"]').should('be.visible').select('20 rows').should('have.value', '20');
        cy.screenshotTest()
        for (let i = 4; i <= 15; i++) {
          cy.get(`#delete-record-${i}`).click()
          cy.get(`#delete-record-${i}`).should('not.exist')
        }
    }
}
export default new WebTablesPage()
