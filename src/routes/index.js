const express = require('express');
const categoryRouter = require('./category.router');
const trademarkRouter = require('./trademark.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');

function routerApi(app) {

  const router = express.Router();

  app.use('/api', router);
  router.use('/usuarios', userRouter);
  router.use('/categorias', categoryRouter);
  router.use('/marcas', trademarkRouter);
  router.use('/productos', productRouter);

}

module.exports = routerApi;
