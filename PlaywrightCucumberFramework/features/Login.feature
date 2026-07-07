Feature: Parabank Login

  Scenario: Successful login
    Given I am on the Parabank login page
    When I login with valid credentials
    Then I should see the Accounts Overview page

  Scenario: Invalid login
    Given I am on the Parabank login page
    When I login with invalid credentials
    Then I should see an error message
