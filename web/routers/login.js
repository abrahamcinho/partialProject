const express = require('express')
const router = express.Router();

const LOGIN_PAGE = "/views/login.ejs";

router.get('/', (req, res) => res.sendFile(path.join(__dirname, LOGIN_PAGE)));

module.exports = router;