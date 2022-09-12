const express = require('express');
const router = express.Router();

const {
    createProduct,
    allProduct,
    oneProduct,
    updateProduct,
    deleteProduct
} = require('../services/product.service');


    // Retrieve all Products
    router.get('/',	async (req, res,next) => {
            try {
                const products = await allProduct();
                res.json(products);
            } catch (error) {
                next(error);
            }
        }
    );

    // Create a new Categories
    router.post('/', async(req, res, next) => {
            try {
                const data = {
                    name: req.body.products.name,
                    description: req.body.products.description,
                    price: req.body.products.price,
                    image: req.body.products.image,
                    galery: req.body.products.galery,
                    categoryId: req.body.products.categoryId,
                    trademarkId: req.body.products.trademarkId,
                }
                const newProduct = await createProduct(data);
                res.json(newProduct);
            } catch (error) {
                next(error);
            }
        }
    );

    // Retrieve a single Producto with id
    router.param('productId', async (req, res, next, productId)=> {
        try{
            const product = await oneProduct(productId);
            req.product = product;
            next(); // go to router.get('/:productId')
        } catch(e) {
            console.log(e);
            res.sendStatus(404);
        }
    });
    router.get('/:productId',  (req, res, next)=>{
        res.status(200).json({product: req.product});
    });

    // // Update a Producto with id
    router.put('/:productId', async(req, res, next)=>{
            try {
                const data = {
                    productId: req.params.productId,
                    name: req.body.products.name,
                    description: req.body.products.description,
                    price: req.body.products.price,
                    image: req.body.products.image,
                    galery: req.body.products.galery,
                    categoryId: req.body.products.categoryId,
                    trademarkId: req.body.products.trademarkId,
                }
                const editProduct = await updateProduct(data)
                    .then(()=>{
                        return oneProduct(data.categoryId);
                    });
                res.json({editProduct: editProduct});
            } catch (error) {
                next(error);
            }
        }
    );

    // // Delete a Producto with id
    router.delete('/:productId', async(req, res, next) => {
            try {
                const productId = req.params.productId;
                const response = await deleteProduct(productId);
                return res.sendStatus(204);
            } catch (error) {
                next(error);
            }
        }
    );

module.exports = router;