

const express = require("express")
const { urlGetController, urlPostController, urlGetControllerById, urlhisController } = require("../controlller/URIcontroller")
// const { TokenCheckerMiddleware } = require("../middleware")

const UrlRouter = express.Router()

UrlRouter
    .get("/url", urlGetController )
    .post("/url", urlPostController)
    .get("/urlid/:id", urlGetControllerById )
    .get("/urluser/:userid", urlhisController )
module.exports = UrlRouter