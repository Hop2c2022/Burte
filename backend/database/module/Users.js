
const mongoose = require("mongoose")

const User = new mongoose.Schema({
    password: {type: String, require: true, minlength:[8, "At least contain 8 characters "]},
    email: {type: String, require: [true, "Email is required"]},
    createdAt: { type: Date, default: Date.now()},
    admin:{ type:Boolean , default:false}
})

const UserModul = mongoose.model("User", User)

module.exports = UserModul                                                                                                                                                                                                     