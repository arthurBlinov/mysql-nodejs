const mysql =  require('mysql2');

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

})
module.exports = db;