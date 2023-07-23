const express = require("express");
const superheroes = require("superheroes");
const supervillains = require("supervillains");

//                            On Console
// console.log("SuperHero   - " + superheroes.random());
// console.log("SuperVillain  - " + supervillains.random());


//                              On Website 
const app = express();

app.get("/",function(req,res){
    res.send("<h1> Superhero Name - " + superheroes.random() + "<br> Supervillain Name - " + supervillains.random()+ "</h1>");
});

app.listen(3000, function(){
    console.log("The server is running on port 3000.");
})