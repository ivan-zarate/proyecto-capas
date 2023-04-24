const newArgs = require("../config/arg");
const { ConnectDB } = require("../config/dbConnection.js");

let userDao;
let productDao;
let messageDao;

switch (newArgs.persistance) {
    case "mongo":
        ConnectDB.getInstance();
        const { UserManagerMongo } = require("./manager/users/userManagerMongo");
        const { usersMongo } = require("./dbModels/user.model");
        const { ProductManagerMongo } = require("./manager/products/productManagerMongo");
        const { productsMongo } = require("./dbModels/product.model");
        const { MessageManagerMongo } = require("./manager/messages/messageManagerMongo");
        const { messagesMongo } = require("./dbModels/message.model");
        userDao = new UserManagerMongo(usersMongo);
        productDao = new ProductManagerMongo(productsMongo);
        messageDao = new MessageManagerMongo(messagesMongo);
        break;
    case "sql":
        break;
    case "firebase":
        break;
}

module.exports = { userDao, productDao, messageDao }