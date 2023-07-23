const express = require("express");
const app = express();
app.get("/",function(req,res){
    res.send("<h1>I have to be consistent or your career will be destroyed. </h1>");
})
app.get("/contacts",function(req,res){
    res.send("<h1>Contact me at : anmol937016@gmail.com</h1>")
})
app.get("/about",function(req,res){
    res.send("<h1>I am Anmol Pandey and This website I made just for the revision.</h1>");
})

app.get("/arpita",function(req,res){
    res.send("<h1>I am Arpita Pandey and I don't want to go to school.</h1>");
})

app.listen(3000,function(){
    console.log("The server is running on port 3000.");
})