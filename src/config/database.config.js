module.exports = {
	HOST: 'localhost',//process.env.DBHOST,
	USER: 'root',//process.env.USER,
	PASSWORD: '12345',//process.env.PASSWORD,
	DB: 'bd_music_ecommerce',//process.env.DB,
	dialect: "mysql",
	pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
	}
  };
