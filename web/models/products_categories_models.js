module.exports = (sqlize, Types) => {
    const ProductsCategories = sqlize.define("products_categories", {
        products_categ_id: { type: Types.INTEGER, primaryKey: true },
        name: { type: Types.STRING },

    });
    return ProductsCategories;
}