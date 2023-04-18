const {userManager} = require("../model/index");


class userService{
    static async registerUsers(user){
        return await userManager.signup(user);
    };

    static async loginUser(user){
        return await userManager.login(user);
    }
};

module.exports = {userService};