module.exports = (sqlize, Types) => {
    const UsersCategories = sqlize.define("users_categories", {
        user_categ_id: { type: Types.INTEGER, primaryKey: true },
        name: { type: Types.STRING },

    });
    return UsersCategories;
}