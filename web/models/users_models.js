module.exports = (sqlize, Types) => {
    const Users = sqlize.define("users", {
        user_id: { type: Types.INTEGER, primaryKey: true },
        first_name: { type: Types.STRING },
        last_name: { type: Types.STRING },
        email: { type: Types.STRING },
        password: { type: Types.STRING },
        avatar: { type: Types.STRING },
        users_categ_id: { type: Types.INTEGER, foreignKey: true },


    });
    return Users;
}