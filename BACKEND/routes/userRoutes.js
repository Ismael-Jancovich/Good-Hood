const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const { validateUser} = require("../middlewares/user.middlewares");
const routerUser = express.Router();

routerUser.get("/ver-usuarios", getAllUsers);
routerUser.get("/:idUsuario", getUserById);
routerUser.post("/", validateUser,createUser);
routerUser.put("/:idUsuario", validateUser, updateUser);
routerUser.delete("/:idUsuario", deleteUser);

module.exports = routerUser;
