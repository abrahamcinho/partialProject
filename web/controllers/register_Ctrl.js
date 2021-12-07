const express = require("express");
const router = express.Router();
var fs = require('fs');
var path = require("path");
//Llamando al JSON
const data = require("../data/usuarios.json");
const dataPath = path.resolve(__dirname, "../data/usuarios.json")

router.get("/", (req, res) => {
    res.render("register");
});
//Registro de Usuario
router.post("/", (req, res) => {
    let usuario = {
        id: data[data.length - 1].id + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        category: req.body.category
    };
    data.push(usuario);
    var prodJson = JSON.stringify(data);
    fs.writeFileSync(dataPath, prodJson);
    //res.send("Registro Exitoso")
    res.redirect("/login");
});

module.exports = router;