module.exports = (sqlize, Types) => {
    const Products = sqlize.define("products", {
        products_id: { type: Types.INTEGER, primaryKey: true },
        name: { type: Types.STRING },
        price: { type: Types.INTEGER },
        discount: { type: Types.INTEGER },
        prod_categ_id: { type: Types.INTEGER, foreignKey: true },
        flavor_id: { type: Types.INTEGER, foreignKey: true },
        size_id: { type: Types.INTEGER, foreignKey: true },
        image: { type: Types.STRING },


    });
    return Products;
}