const express =require("express");
const app=express();
const mysql =require("mysql");
const cors = require("cors");

app.use(cors());

const db=mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"Admin@123",
    database:"users",
});

app.post('/create',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    db.query("INSERT INTO users(name,email,password) VALUES(?,?,?)",[name,email,password],(err,result)=>{
        if(err)
        {console.log("error");}
        else
        {
            res.send(result);
        }

    });



})

app.listen(3001,()=>{
    console.log("server 3001 running");

});