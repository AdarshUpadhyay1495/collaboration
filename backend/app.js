const app=require("express");
const express=require("express");
port==3000;

app.get("/",(req,res)=>{
    res.send("chal raha hai backend");
})

app.listen(3000,()=>{
    console.log("server is running on port "+port);
})