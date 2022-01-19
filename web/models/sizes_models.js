module.exports = (sqlize, Types) => {
    const Size = sqlize.define("sizes", {
        size_id: { type: Types.INTEGER, primaryKey: true },
        name: { type: Types.STRING },

    });
    return Size;
}