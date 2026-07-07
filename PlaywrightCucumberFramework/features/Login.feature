Feature: Parabank Login

  Scenario: Successful login
    Given I open the Parabank login page
    And I log in with valid credentials
    Then I should see the Accounts Overview page

  Scenario: Invalid login
    Given I open the Parabank login page
    And I log in with invalid credentials
    Then I should see an error message

