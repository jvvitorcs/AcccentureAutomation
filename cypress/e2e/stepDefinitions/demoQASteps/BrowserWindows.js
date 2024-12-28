/************************
Step definitions for testing Browser Windows functionality.
It imports the BrowserWindowsPage class and defines steps for navigating to the page, 
opening a new window, and verifying the presence of text in the new window.
************************/

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import BrowserWindowsPage from '../../pages/BrowserWindowsPage'

Given("I access the Browser Windows submenu page", () => {
  BrowserWindowsPage.navigateToBrowserWindow()
})
When("I open a new window", () => {
  BrowserWindowsPage.openNewWindow()
})
Then("I have to verify that the window message appears correctly", () => {
  BrowserWindowsPage.checkTextOnNewWindow()
})
