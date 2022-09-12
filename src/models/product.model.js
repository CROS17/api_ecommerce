module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products',{
        name:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.DECIMAL(11,2),
            defaultValue: 0.00
        },
        image:{
            type: Sequelize.STRING
        },
        galery:{
            type: Sequelize.JSON
        },
        categoryId:{
            type: Sequelize.BIGINT(11),
            field: 'category_id',
            unique: true,
            references:{
                model: 'Category',
                key: 'id'
            }
        },
        trademarkId:{
            type: Sequelize.BIGINT(11),
            field: 'trademark_id',
            unique: true,
            references:{
                model: 'Trademark',
                key: 'id'
            }
        }
    },{
        timestamps: true
    });

    return Product;
}