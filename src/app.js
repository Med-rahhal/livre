const express = require('express'); //importation de framwork express
const path = require('path');
const http = require('http');
const port =5050
const app = express(); //app instance de express
const server = http.createServer(app);
app.use(express.urlencoded({extended:true}));
require('./middelware/db_connexion') //connexion au base des données


app.listen(5050, () => {
  console.log("serveur en marche");
});