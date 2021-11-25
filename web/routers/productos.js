const express = require('express')
const router = express.Router();

const PRODUCT_PAGE = "/views/detalleDelProducto.ejs";

router.get('/', (req, res) => res.sendFile(path.join(__dirname, PRODUCT_PAGE)));

module.exports = router;