const express = require('express')
const router = express.Router();

const CART_PAGE = "/views/carritoDeCompras.ejs";

router.get('/', (req, res) => res.sendFile(path.join(__dirname, CART_PAGE)));

module.exports = router;