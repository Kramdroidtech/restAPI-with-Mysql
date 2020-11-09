const Connection = require('../database/database.js');

module.exports = async (username,password) => {
  try{
    const query = `INSERT INTO `+
                    `users `+
                   `VALUES `+
                    `(null,`+
                    `"${username}",`+
                    `md5("${password}"))`;
                    
    await Connection(query);
    return true;
  }catch(e){
   console.log(e)
    return false;
  }
}