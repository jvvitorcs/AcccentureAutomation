/************************
Step definitions for testing Practice Form functionality.
It imports the PracticeFormPage class and defines steps for navigating to the page, fill out fields,
submit the form, and verify the successful form submission through modal visibility and closing.
************************/

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import PracticeFormPage from '../../pages/PracticeFormPage'

Given("I access the Practice Form submenu page", () => {
    PracticeFormPage.navigateToPracticeForm()
})
When("I submit the completed Form", () => {
    PracticeFormPage.fillAndSubmitForm()
})
Then("I have a successful submission page", () => {
    PracticeFormPage.verifySubmission()
})