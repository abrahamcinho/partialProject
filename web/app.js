const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, (req, res) => console.log("Server para Sweet Dreams online..."));

app.use("/public", express.static("public"));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

const carritoCTRL = require("./controllers/carrito_Ctrl");
const homeCTRL = require("./controllers/home_Ctrl");
const loginCTRL = require("./controllers/login_Ctrl");
const detalleDelProductoCTRL = require("./controllers/detalleDelProducto_Ctrl");
const registerCTRL = require("./controllers/register_Ctrl");
const productosCTRL = require("./controllers/productos_Ctrl");
const listadoProductosCTRL = require("./controllers/listadoProds_Ctrl");


app.use("/carritoDeCompras", carritoCTRL);
app.use("/", homeCTRL);
app.use("/login", loginCTRL);
app.use("/detalleDelProducto", detalleDelProductoCTRL);
app.use("/registro", registerCTRL);
app.use("/carga-edicion-productos", productosCTRL);
app.use("/listado-productos", listadoProductosCTRL);


app.use('/', require('./routers/main'));
app.use('/detalleDelProducto', require('./routers/productos'));
app.use('/login', require('./routers/login'));
app.use('/registro', require('./routers/register'));
app.use('/carritoDeCompras', require('./routers/shoppingcart'));