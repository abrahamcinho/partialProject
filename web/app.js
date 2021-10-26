const express = require("express");
const server = express();
const path = require("path");


server.use("/public", express.static("public"));

server.listen(3030, (req, res) => {
    console.log("Server para Sweet Dreams online...")
});

const HOME_PAGE = "/views/home.html";


server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, HOME_PAGE))
        //res.send("index.html");
});
server.get('/detalleDelProducto', (req, res) => {
    res.sendFile(__dirname + '/views/detalleDelProducto.html');
});

server.get('/carritoDeCompras', (req, res) => {
    res.sendFile(__dirname + '/views/carritoDeCompras.html');
});

server.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

server.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});