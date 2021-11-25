const express = require("express");
const router = express.Router();
var fs = require('fs');
var path = require("path");

const data = require("../data/productos.json");


//Obtener listado de productos
router.get("/", (req, res) => {
    res.render("listadoProductos", {
        tortas: data
    });
});

//Detalle de un producto particular
//router.get("/productos /: id ", (req, res) => {});
router.get("/detalle/:id", (req, res) => {
    
    //let productosJson = fs.readFileSync("../data/productos.json", "utf-8");
    //let prodJS = JSON.parse(productosJson);
    let productoID = data.filter(producto => {
        producto.id == req.params.id;
    });
    
    //Abraham - lo agregue para poder leer el id del detalle de producto
    let reqID = req.params.id;

    res.render("detalleDelProducto", {
        producto: data,
        reqID: reqID,
    });
}); 

//Formulario de creación de productos
router.get("/crear", (req, res) => {
    res.render("crearProd")
});
//Acción de creación(a donde se envía el formulario)
router.post("/crear", (req, res) => {

    let productosJson = fs.readFile("../data/productos.json", "utf-8");
    let prodJS = JSON.parse(productosJson);
    let producto = req.body.producto;
    producto.id = prodJS[prodJS.length - 1].id + 1;
    prodJS.push(producto);
    var prodJson = JSON.stringify(prodJS);
    fs.writeFile("../data/productos.json", prodJson);
    res.redirect("/productos");
});

//Formulario de edición de productos
//router.get("/productos/: id/edit", (req, res) => {
//});
router.get("/editar", (req, res) => {
    res.render("editarProd")
});

//Acción de edición(a donde se envía el formulario)
router.put("/editar/:id", (req, res) => {
    //writeFIleSInc
});

//Acción de borrado
router.delete("/eliminars/: id", (req, res) => {
    let producto = req.body.producto;
    data = data.filter(m => m !== producto);

})

module.exports = router;