const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['password'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('users', attributes, options);
}


//module.exports = (sequelize, Sequelize) => {
//     const User = sequelize.define('users', {
//         username: {
//             type: Sequelize.STRING,
//         },
//         email: {
//             type: Sequelize.STRING,
//             unique: true
//         },
//         password: {
//             type: Sequelize.STRING,
//         }
//     },{
//         timestamps: true
//     });
//     return User;
// }