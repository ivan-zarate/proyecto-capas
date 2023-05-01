const {cartDao} = require("../daos/factory");

class CartService{
    static async getCartProducts(){
        return await cartDao.getCart();
    };
    static async addProduct(productId){
        return await cartDao.addProduct(productId);
    };
    static async updateProduct(productId, query){
        return await cartDao.updateProduct(productId, query);
    };
     static async deleteProduct(productId){
        return await cartDao.delete(productId);
    };

};

module.exports = {CartService};