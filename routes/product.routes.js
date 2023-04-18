const express = require("express");
const productsInMongo = express.Router();
//importamos la capa de controlador
const {productController, createProductController, editProductController, deleteProductController} = require("../controllers/product.controller");

//definir las rutas para usuarios
productsInMongo.get("/products",productController);
productsInMongo.post("/products",createProductController);
productsInMongo.put("/products/:_id",editProductController);
productsInMongo.delete("/products/:_id",deleteProductController);

module.exports = productsInMongo;