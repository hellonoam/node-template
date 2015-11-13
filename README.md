# VCFML

## Install

    npm install
    npm install -g gulp

## Server

### Run the server

    gulp serve

    curl localhost:3041/categories

## DB & Models

### Add model

    node_modules/.bin/sequelize model:create --name Product --attributes name:string,slug:string,data:json

### Migrate

    node_modules/.bin/sequelize db:migrate


### Setting up all DB

    createdb vcfml_development
    createdb vcfml_test

    node_modules/.bin/sequelize db:migrate
    gulp db:seed

### Reset DB (erase everything and recreate tables)

    node_modules/.bin/sequelize db:migrate:undo:all

### Viewing DB

    psql
    \c vcfml_development
    \d # => show tables
    select * from "Categories";
