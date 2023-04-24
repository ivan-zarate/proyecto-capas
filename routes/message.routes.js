const express = require("express");
const chatInMongo = express.Router();
// const validateBody = require("../middlewares/validateBody");
// const validateUser = require("../middlewares/validateUser.js");
//importamos la capa de controlador
const {messageController, createMessageController} = require("../controllers/message.controller");

//definir las rutas para usuarios
chatInMongo.get("/messages",messageController);
chatInMongo.post("/messages",createMessageController);

module.exports = chatInMongo;