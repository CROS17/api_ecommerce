const express = require('express');
const cors = require('cors');
const app = express();

	app.use(cors());

    app.use(express.json());

    app.use(express.urlencoded({ extended:true})); //ruta simple

    app.get('/',function(req, res){
        res.send('ApiRest Music Ecommerce');
    });

	const db = require("./src/models");
	db.sequelize.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

	require("./src/routes/category.router")(app);
    const PORT = process.env.PORT || 3000;

    app.listen(PORT,()=>{
        console.log(`Estamos en el puerto: ${PORT}`);
    })