const {productDao} = require("../daos/factory");


class ProductService{
    static async getProducts(){
        return await productDao.getAll();
    };
    static async createProduct(product){
        return await productDao.create(product);
    };
    static async modifyProduct(id, product){
        return await productDao.modify(id, product);
    };
     static async deleteProduct(id){
        return await productDao.delete(id);
    };

};

module.exports = {ProductService};