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

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });
  
  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Find songs by artist",
          "Find all artists who appear more than once",
          "Find data within a specific range",
          "Search for a specific song",
          "exit"
        ]
      })
    }