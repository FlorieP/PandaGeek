
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User",  {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pseudo: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        avatar: DataTypes.STRING,
        bio: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    })

    return User;
};
