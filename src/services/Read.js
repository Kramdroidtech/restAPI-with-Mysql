const Connection = require('../database/database.js');

module.exports = async (dataFields) => {
  try{
    const query = `SELECT `+
                   `${dataFields} `+
                    `FROM `+
                  `users`;
    const result = await Connection(query);
    return result
  }catch(e){
    console.log(e)
    return []
  }
}