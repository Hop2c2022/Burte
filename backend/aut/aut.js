const User = require("../database/module/Users");

const isAdmin = async (userId) => {
  const user = await User.findById(userId);
  if (user.admin) {
    return user.admin;
  }
  return false;
};

module.exports.authorizer =
  ({ type }) =>
  async (req, res, next) => {
    const fieldId = req.params.id;
    if (await isAdmin(res.locals._Id)) {
      next();
      return;
    }

    if (type.toLowerCase() == "user" && res.locals._Id == fieldId) {
      next();
      return;
    }else if (err){
        console.log(err);
    }
    if (type.toLowerCase() == "post" && res.locals.userId == fieldId) {
        next();
        return;
      }
  };