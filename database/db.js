const mysql =  require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Password@123',
    database: 'blog',

})
// db.connect((res,err) => {
//     if(err){ 
//         return res.status(404) 
//     }
//     console.log('connected to db');
// });
module.exports = db;