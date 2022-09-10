import boom from '@hapi/boom';
import dotenv from 'dotenv';
dotenv.config();

import connection  from "../config/Database.db.js";


class CategoryService {


  async find() {
    return new Promise((resolve,reject) => {
		  connection.query("SELECT * FROM categories",
              (err, res)=>{
                if (err) reject(err);
                else resolve(res);
    	  });
    });
  }

  async create(body) {
    // console.log("hola "+body);
    // const { name,description } = data;
    // return new Promise((resolve, reject)=>{
    //   connection.query("INSERT INTO categories(name,description) VALUES (?,?)",
    //     [ name,description ],
    //     (err, res) => {
    //       if (err) reject(err);
    //       else resolve(res.insertId);
    //     });
    // });

  }


  async findOne(id) {
    return new Promise((resolve,reject)=>{
      connection.query("SELECT id,name,description FROM categories WHERE id = (?)",
        [id],(err,res)=>{
          if(err)reject(err);
          else resolve(res[0]);
        });
    });

  }

  async update(id, description) {
    return new Promise((resolve, reject) =>{
      connection.query("UPDATE categories SET description=(?) WHERE id=(?)",
        [descripcion,id],(err)=>{
          if(err)reject(err);
          else resolve();
        });
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM categories WHERE id = (?)",
        [id],
        (err) => {
          if (err) reject(err);
          else resolve();
        });
    });
  }
}


export default CategoryService;

