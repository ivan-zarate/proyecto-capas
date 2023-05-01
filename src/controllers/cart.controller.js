const {CartService} = require("../services/cart.service");
const logger=require("../logger");

const cartController = async(req,res)=>{
    try {
        const productsInCart = await CartService.getCartProducts();
        res.json({status:"success",data:productsInCart});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};

const addProductController = async(req,res)=>{
    try {
        const newProduct = await CartService.addProduct(req.params);
        res.json({status:"success",data:newProduct});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};
const editProductInCartController = async(req,res)=>{
    try {
        const {query}= req.query;
        const editedProduct = await CartService.updateProduct(req.params, query);
        res.json({status:"success",data:editedProduct});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};
const deleteProductInCartController = async(req,res)=>{
    try {
        const deletedProduct = await CartService.deleteProduct(req.params);
        res.json({status:"success",data:deletedProduct});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};

module.exports = {cartController,addProductController, editProductInCartController, deleteProductInCartController}