/************************
This class contains methods to interact with the Progress Bar section of the demoQA app. 
It provides functionality to navigate to the progress bar, starting the progress,
check if reached 25%, keep progress up to 100% and reset.
************************/

class ProgressBarPage {
    navigateToProgressbar() {
        cy.get('.category-cards > :nth-child(4)').click()
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-4').click()
    }
    CheckProgress25() {
        cy.get('#startStopButton').should('be.visible').click()
        cy.get('.progress-bar').should('be.visible').and('have.attr', 'aria-valuenow', '24')
        cy.get('#startStopButton').click()
        cy.get('.progress-bar').invoke('attr', 'aria-valuenow').then((value) => {
            expect(parseInt(value)).to.be.lte(25)
        })
        cy.screenshotTest()
    }
    CheckProgress100() {
        cy.clock()
        cy.get('#startStopButton').click()
        cy.tick(10000)
        cy.get('.progress-bar').should('have.attr', 'aria-valuenow', '100')
        cy.screenshotTest()
        cy.get('#resetButton').should('be.visible').click()
        cy.get('.progress-bar').should('have.attr', 'aria-valuenow', '0')
    }
}
    
export default new ProgressBarPage()
