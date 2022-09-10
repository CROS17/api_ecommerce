import express from 'express';
import categoryRouter from './category.router.js';

	function routerApi(app){
		const router = express.Router();
		app.use('/api/v1',router);
		router.use('/categories', categoryRouter);
	}

// module.exports = routerApi;
export default routerApi;