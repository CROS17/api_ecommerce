const db = require('../models');
const Category = db.categories;
	
	module.exports ={
		allCategory,
		createCategory,
		oneCategory,
		updateCategory,
		deletCategory
	};

	async function allCategory(){
		const categorias = await Category.findAll();
		return categorias;
	}

	async function createCategory(data){
		await Category.create({
			name: data.name,
			description: data.description
		});
	}

	async function oneCategory(id){
		const category = await Category.findByPk(id);
		return category;
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

	async function deletCategory(id){
		const category = await oneCategory(id);
		await category.destroy();
	}

	// exports.findOne = (req, res) =>{
	// 	const id = req.params.id;
	// 	Category.findByPk(id)
	// 		.then(data =>{
	// 			if (data) {
	// 				res.send(data);
	// 			} else {
	// 				res.status(404).send({
	// 				  message: `no se encontro el id=${id}.`
	// 				});
	// 			}
	// 		})
	// 		.catch(err => {
	// 			res.status(500).send({
	// 				message: "error al buscar la categoria id="+id
	// 			})
	// 		});
	// };

	// exports.update = (req, res) =>{
	// 	const id = req.params.id;
	// 	Category.update(req.body,{
	// 		where: {id:id}
	// 	})
	// 	.then(num =>{
	// 		if (num == 1) {
	// 			res.send({
	// 				message: "categoria actualizada"
	// 			});
	// 		} else {
	// 			res.send({
	// 			message: `Cannot update categoria with id=${id}.`
	// 			});
	// 		}			
	// 	})
	// 	.catch(err => {
	// 		res.status(500).send({
	// 			message: "error al actualizar la categoria id="+ id
	// 		});
	// 	});
	// };

	// exports.delete = (req, res) =>{
	// 	const id = req.params.id;
	// 	Category.destroy({
	// 		where: {id:id}
	// 	})
	// 	.then(num =>{
	// 		if (num == 1) {
	// 			res.send({
	// 				message: "categoria eliminada"
	// 			});
	// 		} else {
	// 			res.send({
	// 			message: `Cannot eliminar categoria with id=${id}.`
	// 			});
	// 		}			
	// 	})
	// 	.catch(err => {
	// 		res.status(500).send({
	// 			message: "error al eliminar la categoria id="+ id
	// 		});
	// 	});
	// };