const { TokenChecker } = require("./helper/helper")

exports.TokenCheckerMiddleware = async (req, res, next) => {
    const token = req?.headers?.authorization

    if(!token){
        res.status(401).send({ message: "No Token provided!" })
        return
    }

    const secret = "lol123"
    const result = await TokenChecker({token, secret})

    if(result === "Expired Token"){
        res.status(401).send({ message: "Your token is expired!" })
        return;
    } else if(result.uid) {
        next()
        return
    }   
}