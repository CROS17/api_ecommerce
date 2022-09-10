import dotenv  from "dotenv";
dotenv.config();
import mysql from "mysql";
let connection;

	try {
		connection = mysql.createConnection({
			host: process.env.DBHOST,
			user: process.env.DBUSER,
			password: process.env.DBPASS,
			database: process.env.DBNAME
		});
	} catch (error) {
		console.log("Failed to connect to database");
	}

// module.exports = {connection};
export default connection;
