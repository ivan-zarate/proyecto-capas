const {productManager} = require("../model/index");


class productService{
    static async getProducts(){
        return await productManager.getAll();
    };
    static async createProduct(product){
        return await productManager.create(product);
    };
    static async modifyProduct(id, product){
        return await productManager.modify(id, product);
    };
     static async deleteProduct(id){
        return await productManager.delete(id);
    };

};

module.exports = {productService};