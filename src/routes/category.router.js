const express = require('express');
const CategoryService = require('../services/category.service');

const router = express.Router();
// const service = new CategoryService();

module.exports = app => {
	// Create a new Tutorial
	router.post("/", CategoryService.create);
	// Retrieve all Tutorials
	router.get("/", CategoryService.findAll);
	// Retrieve a single Tutorial with id
	router.get("/:id", CategoryService.findOne);
	// Update a Tutorial with id
	router.put("/:id", CategoryService.update);
	// Delete a Tutorial with id
	router.delete("/:id", CategoryService.delete);

	app.use('/api/categorias', router);
  };