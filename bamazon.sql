-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

-- insert product description to db--
INSERT INTO products (product_name, department, price, quantity)
VALUES ("sunglasses", "accessories", 12.50, 100);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("coors light", "beverages", 5.00, 1000);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("water", "beverages", 2.50, 500);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("nike sneakers", "footwear", 120.99, 10);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("iphone", "electronoics", 1200.50, 5);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("charging cable", "electronics", 30.50, 100);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("popcorn", "food", 4.99, 750);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("baseball hat", "accessories", 42.50, 100);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("pizza", "food", 18.99, 50);

INSERT INTO products (product_name, department, price, quantity)
VALUES ("record player", "music", 159.97, 16);


