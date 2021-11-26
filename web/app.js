const express = require("express");
const server = express();
const path = require("path");
//const cors = require("cors");
//const method_override = require("method-override");
//const multer = require("multer");

server.use("/public", express.static("public"));
server.set("views", path.resolve(__dirname, "views"));
server.set("view engine", "ejs");


server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());

//comentario de prueba
const carritoCTRL = require("./controllers/carrito_Ctrl");
const homeCTRL = require("./controllers/home_Ctrl");
const loginCTRL = require("./controllers/login_Ctrl");
//const detalleDelProductoCTRL = require("./controllers/detalleDelProducto_Ctrl");
const registerCTRL = require("./controllers/register_Ctrl");
const productosCTRL = require("./controllers/productos_Ctrl");
//const listadoProductosCTRL = require("./controllers/listadoProds_Ctrl");




server.use("/carritoDeCompras", carritoCTRL);
server.use("/", homeCTRL);
server.use("/login", loginCTRL);
//server.use("/detalleDelProducto", detalleDelProductoCTRL);
server.use("/registro", registerCTRL);
server.use("/productos", productosCTRL);


//server.use("/listadoProductos", listadoProductosCTRL);


server.listen(3030, (req, res) => {
    console.log("Server para Sweet Dreams online...")
});






/*Declaramos las rutas de los .HTML como constantes*/
// const HOME_PAGE = "/views/home.ejs";
// const PRODUCT_PAGE = "/views/detalleDelProducto.ejs";
// const CART_PAGE = "/views/carritoDeCompras.ejs";
// const LOGIN_PAGE = "/views/login.ejs";
// const REGISTER_PAGE = "/views/register.ejs";


// server.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, HOME_PAGE));
// });
// server.get('/detalleDelProducto', (req, res) => {
//     res.sendFile(path.join(__dirname, PRODUCT_PAGE));
// });
// server.get('/carritoDeCompras', (req, res) => {
//     res.sendFile(path.join(__dirname, CART_PAGE));
// });
// server.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, LOGIN_PAGE));
// });
// server.get('/registro', (req, res) => {
//     res.sendFile(path.join(__dirname, REGISTER_PAGE));
// });server.use("/carga-edicion-productos", productosCTRL);