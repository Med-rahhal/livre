const express = require("express");
const routerloginEntreprise = express.Router();
const {loginEntreprise} = require("../controllers/EntrepriseLogin");

routerloginEntreprise.post('/login', loginEntreprise);

module.exports = routerloginEntreprise