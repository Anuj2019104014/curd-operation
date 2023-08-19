const prop=require('./db_properties');
const mysql=require('mysql2');

module.exports={
    getConnection:()=>{
        return mysql.createConnection(prop)
    }
}