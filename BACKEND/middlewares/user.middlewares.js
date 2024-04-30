const { check, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');

const validateUser = [
  check("nombre").notEmpty().withMessage("El nombre es requerido"),
  check("mail").isEmail().withMessage("Debe ser un correo electrónico válido"),
  check("contraseña")
    .isLength({ min: 6, max: 50 })
    .withMessage("La contraseña debe tener entre 6 y 50 caracteres"),
  check("usuario").notEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Verificar longitud de contraseña aquí
    const contraseña = req.body.contraseña;
    if (contraseña.length > 50) {
      return res.status(400).json({ errors: [{ msg: "La contraseña no puede tener más de 50 caracteres" }] });
    }
    next();
  },
];

const validateUserId = [
  check("id").isUUID().withMessage("Debe ser un UUID válido"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateUser,
  validateUserId,
};
