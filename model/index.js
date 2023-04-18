const {userManagerMongo} = require("./manager/user.manager");
const {usersMongo} = require("./dbModels/user.model");
const {productManagerMongo} = require("./manager/product.manager");
const {productsMongo} = require("./dbModels/product.model");

const userManager = new userManagerMongo(usersMongo);
const productManager= new productManagerMongo(productsMongo);

module.exports = {userManager,productManager};