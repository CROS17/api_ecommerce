const express = require('express');
// const CategoryService = require('../services/category.service');
const { 
	createCategory,	
	allCategory,
	oneCategory,
	updateCategory,
	deleteCategory
} = require('../services/category.service');

const router = express.Router();

	// Retrieve all Categories
	router.get('/',	async (req, res,next) => {
			try {
				const categories = await allCategory();
				res.json(categories);
			} catch (error) {
				next(error);
			}	
		}
	);
	// Create a new Categories
	router.post('/', async(req, res, next) => {
			try {
				const data = {
					name: req.body.categories.name,
					description: req.body.categories.description,
				}			
				const newCategoria = await createCategory(data);			
				res.json(newCategoria);
			} catch (error) {
				next(error);
			}
		}
	);

	// Retrieve a single Categoria with id
	router.param('categoryId', async (req, res, next, categoryId)=> {
		try{
			// console.log(categoryId);
			const category = await oneCategory(categoryId);
			req.category = category;
			next(); // go to router.get('/:categoryId')
		} catch(e) {
			console.log(e);
			res.sendStatus(404);
		}
	 });
	router.get('/:categoryId',  (req, res, next)=>{
		res.status(200).json({category: req.category});
	 });
	  
	// // Update a Categoria with id
	router.put('/:categoryId', async(req, res, next)=>{
			try {				
				const data = {
					categoryId: req.params.categoryId,
					name: req.body.categories.name,
					description: req.body.categories.description,
				}		
				// const editCategoria = await updateCategory(data)
				// res.json(editCategoria);
				const editCategoria = await updateCategory(data)
				.then(()=>{
					return oneCategory(data.categoryId);
				});			
				res.json({editCategoria: editCategoria});
			} catch (error) {
				next(error);
			}
		}
	);
	
	// // Delete a Categoria with id
		router.delete('/:categoryId', async(req, res, next) => {
				try {
					const categoryId = req.params.categoryId;
					const response = await deleteCategory(categoryId);
					return res.sendStatus(204);					
				} catch (error) {
					next(error);
				}
			}
		);

  module.exports = router;