const Connection = require('../database/database.js');

module.exports = async (id,usrname,pword) => {
  try{
    const query = `UPDATE `+
                    `users `+
                  `SET `+
                    `username = "${usrname}",`+
                    `password = "${pword}" `+
                  `WHERE `+
                    `id = ${id}`
    await Connection(query);
    
    return true
  }catch(e){
    console.log(e)
    return false
  }
}