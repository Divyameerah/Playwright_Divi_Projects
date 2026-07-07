Feature: Accounts Overview

  Background:
    Given I open the Parabank login page
    And I log in with valid credentials

  Scenario: View Accounts Overview
    Then I should see the Accounts Overview page

  Scenario: Navigate to Account Details
    When I click on the first account
    Then I should see the Account Details page
