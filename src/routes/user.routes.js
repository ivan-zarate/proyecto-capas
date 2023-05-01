const express = require("express");
const sessionsMongo = express.Router();
//importamos la capa de controlador
const {registerUsersController,loginUserController, getUsersController} = require("../controllers/user.controller");

//definir las rutas para usuarios
sessionsMongo.post("/signup",registerUsersController);
sessionsMongo.post("/login",loginUserController);
sessionsMongo.get("/getusers",getUsersController);


module.exports = sessionsMongo;