const validacionRegristro = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "El nombre de usuario y la contraseña son obligatorios" });
    }
    next();
};


router.post('', validacionRegristro, registerUser);

module.exports ={
    validacionRegristro,
}