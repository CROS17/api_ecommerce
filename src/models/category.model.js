
module.exports = (sequelize,Sequelize) => {
	const Category = sequelize.define('categories',{
		name:{
			type: Sequelize.STRING,
		},
		description:{
			type: Sequelize.STRING,
		},
		createdAt : {
			// field : 'created_at',
			type : Sequelize.DATETIME
		},
		updatedAt : {
			// field : 'update_at',
			type : Sequelize.DATETIME
		}
	},{
		timestamps : true
	});

	return Category;
}