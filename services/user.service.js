const {userDao} = require("../daos/factory");

const {UserDTO} = require("../daos/dtos/user.dto");
class UserService{
    static async registerUsers(user){
        return await userDao.signup(user);
    };

    static async loginUser(user){
        return await userDao.login(user);
    }
    static async getUsers(){
        const users = await userDao.getAll();
        const newUsersDto = users.map(user=>new UserDTO(user));
        return newUsersDto;
    }
};

module.exports = {UserService};