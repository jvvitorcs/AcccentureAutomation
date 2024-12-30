/************************
Step definitions for testing Progress Bar functionality.
It imports the ProgressBarPage class and defines steps for navigating to the page, 
verify progress until 25%, keep progress up to 100%, and finally reset
************************/

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ProgressBarPage from '../../pages/ProgressBarPage'

Given("I access the Progress Bar submenu page", () => {
    ProgressBarPage.navigateToProgressbar()
})
When("I start the progress bar until the progress is 25%", () => {
    ProgressBarPage.CheckProgress25()
})
Then("I restart the progress the progress until 100%", () => {
    ProgressBarPage.CheckProgress100()
})