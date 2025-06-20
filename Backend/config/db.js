const mysql =require('mysql2/promise');


const mySqlpool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"user"
})

module.exports = mySqlpool;