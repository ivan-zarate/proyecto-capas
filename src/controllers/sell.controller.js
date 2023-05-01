const {SellService} = require("../services/sell.service");
const logger=require("../logger");

const sellController = async(req,res)=>{
    try {
        const { username, name, addres, age, telphone } = req.body;
        const user = {
            username,
            name,
            addres,
            age,
            telphone
        }
        const newSell = await SellService.newSell(user);
        res.json({status:"success",data:newSell});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};

module.exports = {sellController}