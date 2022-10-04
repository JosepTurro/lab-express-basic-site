const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/Home', (request, response, next)=>{
    response.sendFile(__dirname + '/views/home.html');
})

app.get('/About', (request, response, next)=>{
    response.sendFile(__dirname + '/views/about.html');
    //response.send("<h1>About des d'EXPRESS</h1>");
})

app.get('/Works', (request, response, next)=>{
    response.sendFile(__dirname + '/views/works.html');
    //response.send("<h1>About des d'EXPRESS</h1>");
})

app.get('/Photo Gallery', (request, response, next)=>{
    response.sendFile(__dirname + '/views/gallery.html');
    //response.send("<h1>About des d'EXPRESS</h1>");
})