module.exports = (sequelize, Sequelize) => {
    const Trademark = sequelize.define('trademarks',{
        name:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        }

    },{
        timestamps: true
    });

    return Trademark;
}