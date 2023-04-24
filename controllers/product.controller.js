const {ProductService} = require("../services/product.service");
const logger=require("../logger");

const productController = async(req,res)=>{
    try {
        const products = await ProductService.getProducts();
        res.json({status:"success",data:products});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};

const createProductController = async(req,res)=>{
    try {
        const newProduct = await ProductService.createProduct(req.body);
        res.json({status:"success",data:newProduct});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};
const editProductController = async(req,res)=>{
    try {
        const editedProduct = await ProductService.modifyProduct(req.params, req.body);
        res.json({status:"success",data:editedProduct});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};
const deleteProductController = async(req,res)=>{
    try {
        const deletedProduct = await ProductService.deleteProduct(req.params);
        res.json({status:"success",data:deletedProduct});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};

module.exports = {productController,createProductController, editProductController, deleteProductController}