# bamazon

## Video Example
https://drive.google.com/file/d/1NRzv_we5uyb_6FisH59hWB1nsAKKihLz/view

## Description
This tool uses a MySQL Database to track inventory of items available for purchase.  The user will type the Product ID and the Quantity to purchase an item.  Once the purchase is complete  the inventory will be updated based on the purchase order quantity.  

## Commands
To see the current list of inventory use the command line with the below:
* node bamazon_Customer

* Inventory Example: 
-------------------------------

Product: sunglasses
ID: 1
Price: $12.5
-------------------------------

Product: sneakers
ID: 2
Price: $5
-------------------------------

Product: water
ID: 3
Price: $2.5
-------------------------------

## Prompts
The tool will first show the user all of the available products for sale in the store including ID and Price.  The user will then be prompted to select
* `Item ID from product list`
* `Quantity of product requested`


## Purchase Confirmation
Once Product ID and quantity have been selected & the item is in stock bamazon will provide the following information:

1. Confirm order has been submitted
2. Show order total based on product ID and quantity
3. Show how many of the Item remain in Stock

Once completed the user will be prompted to select another product ID to purchase

Example:
* Thanks for your order! Your total is: $12.5
* Our inventory has been updated to 94 left in stock

* ? What product ID would you like to buy? 

## Item not available
If there is not enough stock to complete the order bamazon will provide the following information:

1. Alert that there is not enough stock to complete the order
2. Prompt to select another product ID to purchase

Example:
* ? How many would you like to buy? 100000
* Not enough stock to complete your order. Please select a new item or quantity
* ? What product ID would you like to buy?

## Technologies Used
* MySQL
* MAMP
* node.js
* Inquirer
