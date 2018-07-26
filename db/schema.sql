DROP DATABASE IF EXISTS greenfield;
CREATE DATABASE greenfield;

USE greenfield;

-- Create Table called users
-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   username varchar (250) UNIQUE NOT NULL,
--   password varchar (250) UNIQUE NOT NULL,
--   zipcode varchar (20) NOT NULL,
--   PRIMARY KEY (id)
-- ) ENGINE=InnoDB;

CREATE TABLE users (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar (250) UNIQUE NOT NULL,
  `username` varchar(250) DEFAULT NULL,
  `zip` varchar(20) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;

-- Insert Some Sample Data Into Users Database

-- INSERT INTO users (username, password, zipcode)
--   VALUES ('testUserName', 'testPassword', '11111');

INSERT INTO users (userid, username, zip)
  VALUES ('testUserId', 'testUserName', 'testZip');



/*  From Home Directory of Project Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/

 /*Doicumentation notes:
Inform user to ensure how to start mysql server
Inform user how to run schema file (and when to run it)
Inform user how to access mysql database from within command line
 */