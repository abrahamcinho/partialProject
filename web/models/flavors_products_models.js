module.exports = (sqlize, Types) => {
    const FlavorsProducts = sqlize.define("flavors_products", {
        //SAcar la clave primaria
        prod_id: { type: Types.INTEGER, primaryKey: true },
        flavor_id: { type: Types.INTEGER, primaryKey: true },

    });
    return FlavorsProducts;
}