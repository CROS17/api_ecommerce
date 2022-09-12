const db = require('../models');
const Category = db.categories;
	
	module.exports ={
		allCategory,
		createCategory,
		oneCategory,
		updateCategory,
		deleteCategory
	};

	async function allCategory(){
		return categorias = await Category.findAll();
		// return categorias;
	}

	async function createCategory(data){
		await Category.create({
			name: data.name,
			description: data.description
		});
	}

	async function oneCategory(id){
		return category = await Category.findByPk(id);
	}

	async function updateCategory(data){
		await Category.update({
			name: data.name,
			description: data.description
		},{
			where:{
				id:data.categoryId
			}
		});
	}

	async function deleteCategory(id){
		const category = await oneCategory(id);
		await category.destroy();
	}