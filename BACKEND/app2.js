const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
    const newUser = req.body;
    try{
     const hashedPassword = await bcrypt.hash(newUser.password, 10);
     await User.create ({...newUser, password: hashedPassword});
     res.status (201).json ({message: 'Usuario creado correctamente'})
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Error inesperado en el servidor'})
    };
};



const loginUser = async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = await user.findOne({where: {username} });
        if (!user) {
            return res.status(404).json({message: "Usuario no encontrado"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({message: "Contraseña incorrecta"})
        }   
        res.json({message: "Usuario logeado correctamente"})
    } catch (error) {
        console.error(error);
        res.status(500).json ({message: "Error inesperado en el servidor"})
    }
};

router.post('', validateUserId, loginUser);