const express = require("express");
const cartsInMongo = express.Router();
//importamos la capa de controlador
const {cartController, addProductController, editProductInCartController, deleteProductInCartController} = require("../controllers/cart.controller");

//definir las rutas para usuarios
cartsInMongo.get("/cart-products",cartController);
cartsInMongo.post("/cart-products/:_id", addProductController);
cartsInMongo.put("/cart-products/:_id", editProductInCartController);
cartsInMongo.delete("/cart-products/:_id", deleteProductInCartController);

module.exports = cartsInMongo;