const mongoose = require("mongoose");
const { options } = require("./options");
const logger=require("../logger")

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        mongoose.set('debug', true);
        await mongoose.connect(options.MONGO_URL);
        logger.info('Connected to Mongo')
    } catch (error) {
        logger.warn(`An error occurred trying to connect to mongo: ${error}`)
    }
}

module.exports = { connectDB }