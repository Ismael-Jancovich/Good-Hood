const { check, validationResult } = require("express-validator");

const validateUser = [
  check("username").notEmpty().withMessage("El nombre es requerido"),
  check("email").isEmail().withMessage("Debe ser un correo electrónico válido"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener 6 o mas caracteres"),
  check("full_name").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
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
