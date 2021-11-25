const express = require('express')
const router = express.Router();

const REGISTER_PAGE = "/views/register.ejs";

router.get('/', (req, res) => res.sendFile(path.join(__dirname, REGISTER_PAGE)));

module.exports = router;