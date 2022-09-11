const db = require('../models');
const Category = db.categories;

// const Op = db.Sequelize.Op;

	exports.create = (req,res) =>{
		//creamos la categoria
		const categoria = {
			name: req.body.name,
			description: req.body.description
		}
		//guardamos datos
		Category.create(categoria)
			.then(data => {
				res.send(data);
			})
			.catch(err =>{
				res.status(500).send({
					message: err.message ||"no se pudo crear"
				})
			});
	};

	exports.findAll = (req, res) => {	
		Category.findAll()
			.then(data => {
				// console.log(data);
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({
					message:
					err.message || "No se encontro la Categoria."
				});
			});
	};
	exports.findOne = (req, res) =>{
		const id = req.params.id;
		Category.findByPk(id)
			.then(data =>{
				if (data) {
					res.send(data);
				} else {
					res.status(404).send({
					  message: `no se encontro el id=${id}.`
					});
				}
			})
			.catch(err => {
				res.status(500).send({
					message: "error al buscar la categoria id="+id
				})
			});
	};

	exports.update = (req, res) =>{
		const id = req.params.id;
		Category.update(req.body,{
			where: {id:id}
		})
		.then(num =>{
			if (num == 1) {
				res.send({
					message: "categoria actualizada"
				});
			} else {
				res.send({
				message: `Cannot update categoria with id=${id}.`
				});
			}			
		})
		.catch(err => {
			res.status(500).send({
				message: "error al actualizar la categoria id="+ id
			});
		});
	};

	exports.delete = (req, res) =>{
		const id = req.params.id;
		Category.destroy({
			where: {id:id}
		})
		.then(num =>{
			if (num == 1) {
				res.send({
					message: "categoria eliminada"
				});
			} else {
				res.send({
				message: `Cannot eliminar categoria with id=${id}.`
				});
			}			
		})
		.catch(err => {
			res.status(500).send({
				message: "error al eliminar la categoria id="+ id
			});
		});
	};