module.exports = (sqlize, Types) => {
    const SizeProducts = sqlize.define(" size_products", {
        //SAcar la clave primaria
        prod_id: { type: Types.INTEGER, primaryKey: true },
        size_id: { type: Types.INTEGER, primaryKey: true },

    });
    return SizeProducts;
}