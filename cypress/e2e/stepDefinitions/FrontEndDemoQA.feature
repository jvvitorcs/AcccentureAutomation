Feature: I want to test frontend functionalities
    Background:
        @automatedTest @practiceForm
        Scenario: Fill Form Registration
        Given I access the Practice Form submenu page
        When I submit the completed Form
        Then I have a successful submission page
    
        @automatedTest @browserWindow
        Scenario: Browser Between Windows
        Given I access the Browser Windows submenu page
        When I open a new window
        Then I have to verify that the window message appears correctly

        @automatedTest @webTables
        Scenario: Registration Web Tables
        Given I access the Web Tables submenu page
        When I submit a new registration
        And I edit the new registration
        And I delete the new registration
        Then I have to submit twelve new registrations
        And I delete all new registrations