let con=require('../db_connection');
let connection=con.getConnection();
connection.connect();
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    let e_id=req.body.e_id;
    let e_name=req.body.e_name;
    let e_sal=req.body.e_sal;
    let query = `select * from emp`
    console.log({query})

    connection.query(query,
    (err,result)=>{
        console.log({err, result})
        if(err)
        {res.send=({"insert":"fail"})}
        else{
            res.send=({"insert":"success"})
        }
    });
})
module.exports=router;