const Connection = require('../database/database.js');

module.exports = async (id) => {
  try{
    const query = `DELETE FROM `+
                    `users `+
                  `WHERE `+
                    `id = ${id}`
    await Connection(query);
    
    return true
  }catch{
    return false
  }
}