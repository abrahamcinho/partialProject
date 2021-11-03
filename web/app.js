const express = require("express");
const server = express();
const path = require("path");


server.use("/public", express.static("public"));

server.listen(3030, (req, res) => {
    console.log("Server para Sweet Dreams online...")
});

const HOME_PAGE = "views/home.html";
const PRODUCT_PAGE = "views/detalleDelProducto.html";
const CART_PAGE = "views/carritoDeCompras.html";


server.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, HOME_PAGE))
});
server.get('/detalleDelProducto', (req, res) => {
    res.sendFile(path.join(__dirname, PRODUCT_PAGE));
});
server.get('/carritoDeCompras', (req, res) => {
    res.sendFile(path.join(__dirname, CART_PAGE));
});
