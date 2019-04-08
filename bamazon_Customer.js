//Declaring requirements to install in JSON file
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 8889,

  //  username
  user: "root",

  //  password
  password: "root",
  database: "bamazon_db"
});

//Connecting to Database
connection.connect(function(error) {
    if (error) throw error;
    console.log("database is connected")
    displayItems();
  });
  
  //Calling product objects in Database
  function displayItems() {
    var query = 'SELECT * FROM bamazon_db.products';
    connection.query(query, function(error, result) {
      for (var i = 0; i<result.length; i++){
        console.log("-------------------------------\n");
        console.log("Product: " + result[i].product_name);
        console.log("ID: " + result[i].id);
        console.log("Price: $" + result[i].price);
    
      }

//calling search funtion
runSearch();
    })
  }
  
  //asking user for product ID
  function runSearch() {
    inquirer
      .prompt([{
        name: "id",
        type: "input",
        message: "What product ID would you like to buy?"
      },
      {
      //asking user for quantity
      name: "quantity",
      type: "input",
      message: "How many would you like to buy?"
      }
    ]
      )
    //logging user answers
      .then(function(userInput){
        // console.log(userInput)


        //query the data base for ID input by the user
      var query = 'SELECT * FROM bamazon_db.products WHERE ?';


      //connect to database to provide response based on inventory
      connection.query(query, {id: userInput.id}, function(error, response){
        //REMOVING TESTS
        // console.log("in query");
        // console.log(response);


        //to determine if quantity is in stock to fulfill client order
      if (userInput.quantity <= response[0].quantity){
        //REMOVING TEST
        // console.log("TEST item is in stock")

        //Display price if item is in stock
        var total = userInput.quantity * response[0].price;
        console.log("Thanks for your order! Your total is: $" +total);

        //Creating variable to update database inventory
        var remainingInventory = response[0].quantity - userInput.quantity;
        //REMOVING TEST
        // console.log("Checking the variable " + remainingInventory);

        //Subtracting remaining quantity from database based on user input 
        connection.query(
          "UPDATE bamazon_db.products SET ? WHERE ?",
          [
            {
              quantity: remainingInventory
            },
            {
              id: userInput.id
            }
          ],
          function(error) {
            if (error) throw err;
            console.log("Our inventory has been updated to " + remainingInventory + " left in stock");
            runSearch();
          }
        );

      }
      //if not enough stock is available return out of stock message to user
      else {
        console.log("Not enough stock to complete your order. Please select a new item or quantity")
        runSearch()

          }
        })
      });
    }


