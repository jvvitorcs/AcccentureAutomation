/************************
Step definitions for Web Tables functionality.
It imports the WebTables class and defines steps for navigating to the page,
new registration, editing, and deletion of entries.
Including dynamic creation and deletion of multiple registrations.
************************/

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import WebTablesPage from '../../pages/WebTablesPage'

Given("I access the Web Tables submenu page", () => {
  WebTablesPage.navigateToWebTables()
})
When("I submit a new registration", () => {
    WebTablesPage.RegistrationFormTable()
})
And ("I edit the new registration", () => {
    WebTablesPage.EditRegistrationFormTable()
})
And ("I delete the new registration", () => {
    WebTablesPage.DeleteRegistration()
})
Then("I have to submit twelve new registrations", () => {
    WebTablesPage.RegistrationFormTableDynamically()
})
And ("I delete all new registrations", () => {
    WebTablesPage.DeleteNewRegistrations()
})