const {userDao} = require("../daos/factory");

const {UserDTO} = require("../daos/dtos/user.dto");
class UserService{
    static async registerUsers(user){
        return await userDao.signup(user);
    };

    static async loginUser(user){
        return await userDao.login(user);
    }
};

module.exports = {UserService};