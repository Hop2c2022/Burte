
const mongoose = require("mongoose")
const User = require("../database/module/Users")
const bcrypt = require("bcrypt")

exports.createUserQueary = async (req) => {
    const { password, email } = req.body; 

const salt = bcrypt.genSaltSync(1)

const hash = bcrypt.hashSync(password, salt)

    const result = await new User({ password: hash, email: email }).save();
    return result;
}

exports.usergetbyid = async (req) => {
    const { id } = req.params
    const objId = new mongoose.Types.ObjectId(id);
    await User.findById({ _id: objId });
}
exports.userdelete = async (req) => {
    const { ids } = req.params;
    const objId = new mongoose.Types.ObjectId(ids);
    await User.findByIdAndDelete({ _id: objId },{new: true});
}
exports.userupdate = async (req) => {
    const { id } = req.params;
    const { password, email } = req.body;

    const salt = bcrypt.genSaltSync(1)

const hash = bcrypt.hashSync(password, salt)

      const res2 = await User.findByIdAndUpdate(
        { _id: id }, 
        {
            $set: {password: hash, email: email }
        },
        { new: true } 
        )
      return res2
}
exports.userupdate = async (req) => {
    const { id } = req.params;
    const { password, email } = req.body;
    const salt = bcrypt.genSaltSync(1);
    const hash = bcrypt.hashSync(password,salt)
      const res2 = await User.findByIdAndUpdate(
        { _id: id }, 
        {
            $set: {password: hash, email: email }
        },
        { new: true } 
        )
      return res2
}
exports.userloginn = async (req,res) => {
    const { password, email } = req.body;
    const user = await User.findOne({ email: email })
    const cmp = await bcrypt.compare(password, user.password)
    if(!user){
        return " You don't have any user account, please sign up "
    }
    if(cmp){
        const token = await TokenGenerator({ uid: user._id, expires: 1200 })
        console.log(user._id.valueOf() ,token)
        return [user._id.valueOf(), token]
    }else{
        console.log("Invalid password or email");
        return "Invalid password or email"
    } 
}


const { TokenGenerator } = require("../helper/helper")
exports.createUserQueary = async (req) => {
    const { password, email } = req.body;
    const salt = bcrypt.genSaltSync(1);
    const hash = bcrypt.hashSync(password,salt)
    const result = await new User({ password: hash, email: email }).save();
    return result;
}

exports.usergetbyid = async (req) => {
    const { id } = req.params
    const objId = new mongoose.Types.ObjectId(id);
    await User.findById({ _id: objId });
}
exports.userdelete = async (req) => {
    const { ids } = req.params;
    const objId = new mongoose.Types.ObjectId(ids);
    await User.findByIdAndDelete({ _id: objId },{new: true});
}

