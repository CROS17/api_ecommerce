const db = require('../models');
const Product = db.products;

    module.exports ={
        allProduct,
        createProduct,
        oneProduct,
        updateProduct,
        deleteProduct
    };

    async function allProduct(){
        return products = await Product.findAll();
    }

    async function createProduct(data){
        await Product.create({
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image,
            galery: data.galery,
            categoryId: data.categoryId,
            trademarkId: data.trademarkId,
        });
    }

    async function oneProduct(id){
        return product = await Product.findByPk(id);
    }

    async function updateProduct(data){
        await Product.update({
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image,
            galery: data.galery,
            categoryId: data.categoryId,
            trademarkId: data.trademarkId,
        },{
            where:{
                id:data.productId
            }
        });
    }

    async function deleteProduct(id){
        const product = await oneProduct(id);
        await product.destroy();
    }