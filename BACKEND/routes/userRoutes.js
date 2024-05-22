const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser
} = require("../controllers/userControllers");
const { validateUser} = require("../middlewares/user.middlewares");
const routerUser = express.Router();

routerUser.get("/ver-usuarios", getAllUsers);
routerUser.get("/:idUsuario", getUserById);
routerUser.post("/register", validateUser,createUser);
routerUser.post("/login", loginUser);
routerUser.put("/:idUsuario", validateUser, updateUser);
routerUser.delete("/:idUsuario", deleteUser);

module.exports = routerUser;
