DROP DATABASE IF EXISTS greenfield;
CREATE DATABASE greenfield;

USE greenfield;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar (250) UNIQUE NOT NULL,
  password varchar (250) UNIQUE NOT NULL,
  zipcode varchar (20) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- Insert Some Sample Data Into Users Database

INSERT INTO users (username, password, zipcode)
  VALUES ('testUserName', 'testPassword', '11111');

/*  From Home Directory of Project Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/