const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const router = express.Router();

router.get("/ver-usuarios", getAllUsers);
router.get("/:idUsuario", getUserById);
router.post("/", createUser);
router.put("/:idUsuario", updateUser);
router.delete("/:idUsuario", deleteUser);

module.exports = router;