const express = require("express");
const produitController = require("../controllers/produitControllers");
const routerProduit = express.Router();

const {allproduit,ajoutProduit,getProduitById,DeleteProduit,updateProduit, } = require("../controllers/produitControllers");





routerProduit.post('/ajoutProduit',ajoutProduit)
routerProduit.get('/Getproducts',allproduit)
routerProduit.get('/getProduitById/:id',getProduitById)
routerProduit.delete('/deleteProduit/:id',DeleteProduit)
routerProduit.put('/updateProduit/:id',updateProduit)
module.exports = routerProduit