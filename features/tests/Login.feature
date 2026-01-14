Feature: Login feature

  @Nppuser @login
  Scenario: Users and password does not match
    * I open up the URL "https://www.saucedemo.com/"

    * I will be on the "saucedemo_login" page
    * I focus and click on the element "username"

    * I type "hello"
    * I press the "Backspace" key
    * I press the "Tab" key
    * I enter the text "hello" with a 1000 ms delay

    * I press the "Shift+Tab" key

    * I enter the text "New hello" with a 1000 ms delay
    * I click on the element "login"
    * I expect that the element "login error" matches the text "Epic sadface: Username and password do not match any user in this service"

  @Nothing  @Nppuser
  Scenario Outline: Incorrect Credentials
    * I open up the URL "https://www.saucedemo.com/"
    * I will be on the "saucedemo_login" page
    * I click on the element "login"

    * I expect that the element "login error" matches the text "Epic sadface: Username is required"
    * I set "Hello" to the inputfield "username"
    * I expect the inputfield "username" matches the text "Hello"
    * I set "Hello" to the inputfield "password"
    * I expect the inputfield "password" matches the text "Hello"

    Examples:
      | newName | oldName | bblah |
      | A       | B       | true  |
      | C       | D       | false |
      | E       | F       | false |
