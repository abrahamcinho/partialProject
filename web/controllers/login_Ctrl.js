const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
var fs = require('fs');
var path = require("path");
//Llamando al JSON
const dataPath = path.resolve(__dirname, "../data/usuarios.json");
const bcryptjs = require("bcryptjs");

const data = require("../data/usuarios.json");

router.get("/", (req, res) => {
    res.render("login");
});


//Validar email y password
router.post("/", (req, res) => {

    let usuario = findByField("email", req.body.email);

    if (usuario && usuario.password == req.body.password) {
        return res.redirect("/");
    } else {
        return res.render("login");
    }
});


function findByField(field, text) {
    let todosLosUsuarios = findAll();
    let usuarioEncontrado = todosLosUsuarios.find(oneUser => oneUser[field] === text);
    return usuarioEncontrado;

}

function findAll() {
    return data;
}
module.exports = router;