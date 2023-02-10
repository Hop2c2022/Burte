
const mongoose = require("mongoose")

const Url = new mongoose.Schema({
    userid: {type: mongoose.Schema.ObjectId, ref: "User", require: true},
    originalurl: {type: String, require: true},
    shorturl: {type: String, require: true},
    createdAt: { type: Date, default: Date.now()}
})

const UrlModel = mongoose.model("Url", Url)

module.exports = UrlModel