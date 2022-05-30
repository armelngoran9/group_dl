// Imports
var express = require("express");
var server = express();
var port = process.env.PORT || 7000;
var bodyparser = require("body-parser");
var apiRouter = require("./apiRouter").router;
var dbconnect = require("./bdd")


// Configuration de body-parser
server.use(bodyparser.urlencoded({extended : true}));
server.use(bodyparser.json());

server.set('view engine', 'ejs')
server.use(express.static('public'))

//Principale chemin de depart
server.use("/api", apiRouter);

//Demarage du server
server.listen(port, ()=>{
    console.log("Connecté au server.");
});