const express = require("express");
const router = express.Router();

router.get("/detalle", (req, res) => {
    res.render("detalleDelProducto");
});

module.exports = router;