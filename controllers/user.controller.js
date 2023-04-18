const {userService} = require("../services/user.service");
const logger=require("../logger");

const registerUsersController = async(req,res)=>{
    try {
        console.log("signup",req.body);
        const users = await userService.registerUsers(req.body);
        
        res.json({status:"success",data:users});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};

const loginUserController = async(req,res)=>{
    try {
        const user = await userService.loginUser(req.body);
        console.log("userController", user);
        res.json({status:"success", data:user});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
}

module.exports = {registerUsersController,loginUserController}