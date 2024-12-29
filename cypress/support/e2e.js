import './commands'
import { BASE_URL } from '../e2e/pages/URLPage'
beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    cy.viewport(1920, 1080);
    cy.visit(BASE_URL)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})