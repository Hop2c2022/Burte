// const User = require("../database/module/Users")
// const mongoose = require("mongoose")
// const {createUserQueary, usergetbyid, userdelete, userupdate ,userloginn} = require("../query/Userquery")
// const { TokenGenerator } = require("../helper/helper")
// const { response } = require("express");

// exports.userPostController = async(req, res) =>{
//   try{
//     await createUserQueary(req)
//     res.status(201).send('successfully created new user')
//   }catch(err){
//     res.status(403).send(err.message)
//     console.log(err.message);
//   }
    
// }
// exports.userGetControllerById = async( req, res ) => {
//   const result = await usergetbyid(req)
//   res.send({ data: result })
// }
// exports.userPutController = async(req, res) => {
//   try{
//     const result = userupdate(req)
//       res.send(result)
//   }catch(err){
//     res.send(err.messege)
//   }
// }

// exports.userlogin = async (req,res) => {
//   try{
//     const result = await userloginn(req)
//     console.log("result",result)
//       res.send(result)
//   }catch(err){
//     res.send(err.messege)
//   }
// }
// exports.userGetController = async ( req, res ) => {
//   const result = await User.find();
//   res.send({ data: result })
// }


// exports.userGetControllerById = async (req, res) => {
//   try {
//     const result = await GetUserbyid(req);
//     res.status(201).send(result);
//   } catch (err) {
//     res.send(err.message);
//   }
// };

// exports.postGetController = async( req, res ) => {
//   const result = await Post.find()
//   res.status(200).send(result)
// }



// exports.usersDeleteController = async(req, res) => {
//   try{
//     const result = userdelete(req)
//       res.send(result)
//   }catch(err){
//     res.send(err.messege)
//   }
// }

// exports.userPutController = async(req, res) => {
//   try{
//     const result = userupdate(req)
//       res.send(result)
//   }catch(err){
//     res.send(err.messege)
//   }
// }

// exports.userLogin = async (req, res) => {
//   const { password, email } = req.body;
//   const user = await User.findOne({ email: email })
//   if(!user) res.send(" You don't have any user account, please sign up ")

//   if(user.password === password && user.email === email){
//       const token = await TokenGenerator({ uid: user._id, expires: 1200 })
//       res.send({ token: token })
//       return
//   }else{
//       res.send("Invalid password or email")
//       return
//   }
// }
const User = require("../database/module/Users")
const mongoose = require("mongoose")
const {createUserQueary, usergetbyid, userdelete, userupdate, userloginn} = require("../query/Userquery")


exports.userPostController = async(req, res) =>{
  try{
    await createUserQueary(req)
    res.status(201).send('successfully created new user')
  }catch(err){
    res.status(403).send(err.message)
    console.log(err.message);
  }
    
}

exports.userGetController = async( req, res ) => {
  const result = await User.find()
  res.status(200).send(result)
}


exports.userGetControllerById = async( req, res ) => {
  const result = await usergetbyid(req)
  res.send({ data: result })
}

exports.postGetController = async( req, res ) => {
  const result = await User.find()
  res.status(200).send(result)
}



exports.usersDeleteController = async(req, res) => {
  try{
    const result = userdelete(req)
      res.send(result)
  }catch(err){
    res.send(err.messege)
  }
}

exports.userPutController = async(req, res) => {
  try{
    const result = userupdate(req)
      res.send(result)
  }catch(err){
    res.send(err.messege)
  }
}
exports.userlogin = async (req,res) => {
  try{
    const result = await userloginn(req)
    console.log("result",result)
      res.send(result)
  }catch(err){
    res.send(err.messege)
  }
}