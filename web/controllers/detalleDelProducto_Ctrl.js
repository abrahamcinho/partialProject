const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.render("detalleDelProducto");
});

module.exports = router;