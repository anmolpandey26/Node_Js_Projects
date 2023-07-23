const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html");
});

app.post("/",function(req,res){
    var n1 = req.body.inp1;
    var n2 = req.body.inp2;
    var a=Math.random()*100;
    while(a<30 || a>90){
        a=Math.random()*100;
    }
    res.send("<h1>The value of friendship between "+n1+" and "+ n2 +" is: "+Math.trunc(a)+"</h1>");
});

app.listen(3000,function(){
    console.log("The server is running on port 3000.");
});
