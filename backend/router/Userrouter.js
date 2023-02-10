const express = require("express")
const { userlogin,  commentDeleteController, userGetControllerById,userPostController, userGetController, userPutController, usersDeleteController } = require("../controlller/Usercontroller")
const { TokenCheckerMiddleware } = require("../middleware")

const UserRouter = express.Router()

UserRouter
    .get("/user",TokenCheckerMiddleware, userGetController )
    .get("/user/:id", userGetControllerById )
    .post("/user",TokenCheckerMiddleware, userPostController )
    .put("/user/:id", userPutController )
    .post("/login", userlogin)
    .delete("/users/:ids", usersDeleteController)

module.exports = UserRouter