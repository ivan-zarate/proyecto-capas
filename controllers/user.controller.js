const {UserService} = require("../services/user.service");
const logger=require("../logger");

const registerUsersController = async(req,res)=>{
    try {
        const users = await UserService.registerUsers(req.body);
        res.json({status:"success",data:users});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
};

const loginUserController = async(req,res)=>{
    try {
        const user = await UserService.loginUser(req.body);
        console.log("userController", user);
        res.json({status:"success", data:user});
    } catch (error) {
        logger.error(error.message)
        res.json({status:"error",message:error.message});
    }
}

module.exports = {registerUsersController,loginUserController}