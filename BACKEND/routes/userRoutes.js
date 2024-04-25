const express = require("express");
const middlewares = require('../middlewares/user.middlewares')
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const { validateUser} = require("../middlewares/user.middlewares");
const router = express.Router();

router.get("/ver-usuarios", getAllUsers);
router.get("/:idUsuario", getUserById);
router.post("/", validateUser,createUser);
router.put("/:idUsuario", validateUser, updateUser);
router.delete("/:idUsuario", deleteUser);

module.exports = router;
  
