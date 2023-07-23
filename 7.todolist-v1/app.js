//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.get("/",function(req,res){

    const d=new Date();
    if(d.getDay()==0){
        res.send("Today is Sunday.");
    }else{
        res.send("Today is working day.")
    }
});

app.listen(3000,function(){
    console.log("Running on port 3000.");
});