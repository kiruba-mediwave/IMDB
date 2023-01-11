const { user } = require("../models");
const getAllUsers = () => {
  return user.findAll({
    where: {},
  });
};
console.log(getAllUsers, "Users");
module.exports = {
  getAllUsers,
};
