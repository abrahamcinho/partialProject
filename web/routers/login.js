const express = require('express')
const router = express.Router();

const LOGIN_PAGE = "/views/login.ejs";

router.get('/', (req, res) => res.sendFile(path.join(__dirname, LOGIN_PAGE)));

//Celeste
// router.get("/login", usuarios_Ctrl.login);
// router.post("/login", [check("email").isEmail().withMessaje("Email invalido"),
//     check("password").isLength({ min: 8 }).withMessaje("La contraseña ingresada debe tener al menos 8 caracteres")
// ], usuarios_Ctr.processLogin);

module.exports = router;