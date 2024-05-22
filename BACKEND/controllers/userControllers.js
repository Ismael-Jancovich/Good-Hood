const User = require('../models').User;
const bcrypt = require('bcrypt');

async function createUser(req, res) {
  const newUser = req.body;
  console.log(newUser);
  try{
   const hashedPassword = await bcrypt.hash(newUser.contraseña, 10);
   await User.create({...newUser, contraseña: hashedPassword});
   res.status (201).json ({message: 'Usuario creado correctamente'})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Error inesperado en el servidor'})
  };
}

const loginUser = async(req, res) => {
  const {mail, contraseña} = req.body;
  try {
      const user = await User.findOne({where: {mail} });
      if (!user) {
          return res.status(404).json({message: "Usuario no encontrado"});
      }
      const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
      if (!isPasswordValid) {
          return res.status(400).json({message: "Contraseña incorrecta"})
      }   
      res.json({message: "Usuario logeado correctamente"})
  } catch (error) {
      console.error(error);
      res.status(500).json ({message: "Error inesperado en el servidor"})
  }
};

function getAllUsers(req, res) {
  const users = User.findAll();
  res.json(users);
} 

function getUserById(req, res) {
  const id = req.params.id;
  const user = User.findByPK(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}


function updateUser(req, res) {
  const id = req.params.id;
  const updatedUser = req.body;
  User.update(id, updatedUser);
  res.json({ message: "User updated" });
}

function deleteUser(req, res) {
  const id = req.params.id;
  User.delete(id);
  res.json({ message: "User deleted" });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};