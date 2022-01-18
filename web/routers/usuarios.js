const express = require('express');
const router = express.Router();

const USERS_PAGE = "/views/listadoUsuarios.ejs";

router.get('/', (req, res) => res.sendFile(path.join(__dirname, USERS_PAGE)));

module.exports = router;