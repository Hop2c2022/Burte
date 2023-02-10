
const mongoose = require("mongoose")

const dotenv = require("dotenv")

dotenv.config()

const connectionString = process.env.MONGODB_URI
console.log("uri", connectionString)
exports.connectDatabase = async () => {
    try{
        await mongoose.connect(connectionString)
        console.log("successfully connected");
        return "Mongoose connected"
    }catch(err){
        console.log(err.message);
        return err.message
    }
}