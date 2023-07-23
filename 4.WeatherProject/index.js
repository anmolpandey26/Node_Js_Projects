const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+ "/site.html");
});

app.post("/",function(req,res){

    const city= req.body.city;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=204ee3d5038406d38889cdfc8fe874d2&units=metric";
    
    https.get(url, function(response){
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const icon = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            res.write("<h1>The temperature of "+ city +" is "+ weatherData.main.temp +" degree celcius. The weather is currently "+ weatherData.weather[0].description +".<h1>");
            res.write("<img src="+icon+" >");
            res.send();
        })        
        
    });
});

app.listen(3000,function(){
    console.log("the server is running 3000.");
})