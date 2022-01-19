module.exports = (sqlize, Types) => {
    const Flavors = sqlize.define("flavors", {
        flavor_id: { type: Types.INTEGER, primaryKey: true },
        name: { type: Types.STRING },

    });
    return Flavors;
}