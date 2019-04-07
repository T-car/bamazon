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
        console.log(userInput)


        //query the data base for ID input by the user
      var query = 'SELECT * FROM bamazon_db.products WHERE ?'
      connection.query(query, {id: userInput.id}, function(error, respsonse){
        console.log("in query");
        //to determine if quantity is in stock to fulfill client order
      if (answer.quantity <= respsonse[0].quantity){
        console.log("price")


        
      }
      //if not enough stock is available return out of stock message to user
      else {
        console.log("Out of Stock")

        }
        })
      

      });

      }


