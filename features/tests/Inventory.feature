@featureTag
@featureTagTwo
Feature: Inventory feature
# This is my comment line
  @Nppuser @BranchUser @inventory @single
  Scenario: Verify the top Six Items
    * I open up the page "saucedemo_login"
    * I will be on the "saucedemo_login" page
    * I set "standard_user" to the inputfield "username"
    * I expect the inputfield "username" matches the text "standard_user"
    * I set "secret_sauce" to the inputfield "password"
    * I expect the inputfield "password" matches the text "secret_sauce"
    * I click on the element "login"

    * I will be on the "saucedemo_inventory" page

    * I expect the following indexed elements match the following text
      | indexNo | elementname          | expectedText             |
      | 0       | inventory item name  | Sauce Labs Backpack      |
      | 0       | inventory item price | $29.99                   |
      | 1       | inventory item name  | Sauce Labs Bike Light    |
      | 1       | inventory item price | $9.99                    |
      | 2       | inventory item name  | Sauce Labs Bolt T-Shirt  |
      | 2       | inventory item price | $15.99                   |
      | 3       | inventory item name  | Sauce Labs Fleece Jacket |
      | 3       | inventory item price | $49.99                   |
      | 4       | inventory item name  | Sauce Labs Onesie        |
      | 4       | inventory item price | $7.99                    |
      | 5       | inventory item name  | T-Shirt Red              |
      | 5       | inventory item price | $15.99                   |
#      | 5       | inventory item name  | Test.allTheThings() T-Shirt (Red) |

  @Nppuser @inventory
  Scenario Outline: Add and remove Product
    * I open up the URL "https://www.saucedemo.com/"

    * I will be on the "saucedemo_login" page
    * I set "standard_user" to the inputfield "username"
    * I expect the inputfield "username" matches the text "standard_user"
    * I set "secret_sauce" to the inputfield "password"
    * I expect the inputfield "password" matches the text "secret_sauce"
    * I click on the element "login"

    * I will be on the "saucedemo_inventory" page

    * I press the "Enter" key

    * I expect the following indexed elements match the following text
      | indexNo | elementname         | expectedText            |
      | 0       | inventory item name | Sauce Labs Backpack     |
      | 1       | inventory item name | Sauce Labs Bike Light   |
      | 2       | inventory item name | Sauce Labs Bolt T-Shirt |

    * I expect that the "2nd" element "inventory item name" matches the text "Sauce Labs Bike Light"

    * I expect that element "shopping cart badge" does not exist
    * I click on the "2nd" "add to cart button" element
    * I expect that element "shopping cart badge" exists
    * I click on the element "remove sauce labs bike light"
    * I expect that element "shopping cart badge" does not exist

    Examples:
      | name | value |
      | 1    | 2     |
      | 3    | 4     |

  @Nppuser @inventoryx
  Scenario: Checkout Product
    * I open up the URL "https://www.saucedemo.com/"
    * I will be on the "saucedemo_login" page
    * I set "standard_user" to the inputfield "username"
    * I expect the inputfield "username" matches the text "standard_user"
    * I set "secret_sauce" to the inputfield "password"
    * I expect the inputfield "password" matches the text "secret_sauce"
    * I click on the element "login"
    * I will be on the "saucedemo_inventory" page

    * I press the "Enter" key

    * I expect the following indexed elements match the following text
      | indexNo | elementname         | expectedText            |
      | 0       | inventory item name | Sauce Labs Backpack     |
      | 1       | inventory item name | Sauce Labs Bike Light   |
      | 2       | inventory item name | Sauce Labs Bolt T-Shirt |

    * I expect that the "2nd" element "inventory item name" matches the text "Sauce Labs Bike Light"

    * I expect that element "shopping cart badge" does not exist
    * I click on the "2nd" "add to cart button" element
    * I expect that element "shopping cart badge" exists
    * I click on the element "shopping cart badge"

    * I will be on the "your_cart" page

    * I expect that the element "title" matches the text "Your Cart"
    * I expect that the "1st" element "inventory item name" matches the text "Sauce Labs Bike Light"
    * I expect that the "1st" element "inventory item price" matches the text "$9.99"

    * I expect that the element "checkout button" matches the text "Checkout"
    * I expect that the element "remove sauce labs bike light" matches the text "Remove"

    * I click on the element "checkout button"
