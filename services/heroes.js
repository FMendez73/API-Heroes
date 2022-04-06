const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page =1){

const offset= helper.getOffset(page,config.listPerPage);
const rows= await db.query(`SELECT id, name 
    FROM heroes LIMIT ${offset},${config.listPerPage}`);
const data = helper.emptyOrRows(rows);
const meta= {page};

return {data,meta}

}

async function create(heroes){
    const result= await db.query(`INSERT INTO heroes 
    (name) 
    VALUES 
    ("${heroe.name}")`
  );
    let message= 'Error en crear el heroe';
    if(result.affectedRows){
        message='Se creo correctamente el heroe';
    }
return message;
}

async function update(id,heroe){
    const result = await db.query(
        `UPDATE heroes 
        SET name="${heroe.name}"
        WHERE id =${id}`
      );
      let message = 'Error in updating hero';
      if (result.affectedRows) {
        message = 'heroe updated successfully';
      }
      return {message};
}

async function remove(id){
    const result=await db.query(` DELETE FROM 
    heroes 
    where id=${id}`);
    let message = 'Error in remove the hero';
    if (result.affectedRows) {
      message = 'Hero removed successfully';
    }
    return {message};
};

module.exports={getMultiple,create,update,remove}