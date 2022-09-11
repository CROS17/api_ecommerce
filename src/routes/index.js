const express = require('express');
const categoryRouter = require('./category.router');

function routerApi(app) {

  const router = express.Router();

  app.use('/api', router);
  router.use('/categorias', categoryRouter);

}

module.exports = routerApi;
