const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
//const method_override = require("method-override");
const multer = require("multer");
const session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use("/public", express.static("public"));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//app.use(methodOverride("_method"));
app.use(session({ secret: "Session - Top Secret" }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Controllers constants
const carritoCTRL = require("./controllers/carrito_Ctrl");
const homeCTRL = require("./controllers/home_Ctrl");
const loginCTRL = require("./controllers/login_Ctrl");
const registerCTRL = require("./controllers/register_Ctrl");
const productosCTRL = require("./controllers/productos_Ctrl");
const usuariosCTRL = require("./controllers/users_Ctrl");

//Routes
app.use("/carritoDeCompras", carritoCTRL);
app.use("/", homeCTRL);
app.use("/login", loginCTRL);
app.use("/registro", registerCTRL);
app.use("/productos", productosCTRL);
app.use("/usuarios", usuariosCTRL);

//Routers
app.use('/', require('./routers/main'));
app.use('/detalleDelProducto', require('./routers/productos'));
app.use('/login', require('./routers/login'));
app.use('/registro', require('./routers/register'));
app.use('/carritoDeCompras', require('./routers/shoppingcart'));
app.use('/listadoUsuarios', require('./routers/usuarios'));

app.listen(3030, (req, res) => console.log("app para Sweet Dreams online..."));