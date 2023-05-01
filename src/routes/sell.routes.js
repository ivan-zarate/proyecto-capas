const express = require("express");
const sellsRoutes = express.Router();
const validateCart = require("../middlewares/validateCart");
//importamos la capa de controlador
const {sellController} = require("../controllers/sell.controller");

//definir las rutas para usuarios
sellsRoutes.post("/sells",validateCart, sellController);

module.exports = sellsRoutes;