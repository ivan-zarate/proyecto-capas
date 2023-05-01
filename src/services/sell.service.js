const {sellDao} = require("../daos/factory");

class SellService{
    static async newSell(user){
        return await sellDao.sell(user);
    };
};

module.exports = {SellService};