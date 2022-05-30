// Imports
var bcrypt = require("bcrypt");
var models = require("../models");
const login = require("../models/login");
var dbconnect = require("../bdd");


const EMAILS_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {

    connexion : (req, res)=>{
        
        var email = req.body.email;
        var password = req.body.password;

        if(email==null || password==null){
            res.status(402).json({"error":"un parametre manquant"});
        }

        models.Login.findOne({
            attributes : ['email'],
            where : {email : email}
        })
        .then((loginFound)=>{
            if(loginFound){
                bcrypt.compare(password, loginFound.password, (err, passwordSearch)=>{
                    if(passwordSearch){
                        return res.status(201).json({
                            "loginId" : loginFound.id
                        });
                    }else{
                        return res.status(410).json({"error" : "password incorrect"});
                    }
                })
            }else{
                res.status(403).json({"error": "login introuvable"})
            }
        })
        .catch((err)=>{
            res.status(501).json({"error" : "erreur lors de la recherche des logins inscris"})
        })
    },

    register : (req, res)=>{

        var email = req.body.email;
        var password = req.body.password;

        if(email==null || password==null){
            res.status(402).json({"error":"un parametre manquant"});
        }


        if (password.length > 15){
            res.status(400).json({ "error" : "le mot de passe ne doit etre pas 15 caratères"});
        }

    
        if (!EMAILS_REGEX.test(email)) {
            return res.status(400).json({ 'error': 'email invalide ou manquant' });
        }

        models.Login.findOne({
            attributes : ['email'],
            where : { email : email}
        })
        .then((loginFound)=>{
            if(!loginFound){
                bcrypt.hash(password, 5, (err, passwordCrypted)=>{
                    var newLogin = models.Login.create({
                        email : email,
                        password : passwordCrypted
                    })
                    .then((newLogin)=>{
                        res.status(201).json({
                            "loginId" : newLogin.id,
                            "Info" : "User ajouté"
                        });
                    })
                    .catch((err)=>{
                        res.status(400).json({"error":"l'email existe deja"})
                    });
                });
            }else{
                res.status(407).json({"error": "l'email existe deja"});
            }
        })
        .catch((err)=>{
            res.status(401).json({"error":"impossible de rechercher si ce login existe ou "});
        })
    },

    info_user : (req, res)=>{
        var db = dbconnect()

        var id = req.body.id;

        db.query("SELECT * FROM logins WHERE id=?",[id], (err, result, field) => {
            if (err) throw err
            res.status(200).send(result)
        })
    },


    update_user :(req, res) =>{

        var id = req.body.id;
        var email = req.body.email;
        var password = req.body.password;

        models.Login.findOne({
            where : {id : id}
        })
        .then((loginFound)=>{
            if(loginFound){
                loginFound.update({
                    email : email,
                    password : password,
                    LoginId : loginFound.id 
                })
                .then(()=>{
                    return res.status(200).json({
                        "info" : "Login modifiée avec succès"
                    })
                })
                .catch((err)=>{
                    res.status(413).json({"error": "le login n'a pas pu être mofifié"})
                });
            }else{
                res.status(403).json({"error": "login introuvable"})
            }
        })
        .catch((err)=>{
            res.status(501).json({"error" : "erreur lors de la recherche du login a modifié"})
        });
    },


    update_role :(req, res) =>{

        var id = req.body.id;
        var role = "admin";

        models.Login.findOne({
            where : {id : id}
        })
        .then((loginFound)=>{
            if(loginFound){
                loginFound.update({
                    role : role,
                    LoginId : loginFound.id 
                })
                .then(()=>{
                    return res.status(200).json({
                        "info" : "Role modifiée avec succès"
                    })
                })
                .catch((err)=>{
                    res.status(413).json({"error": "le role n'a pas pu être mofifié"})
                });
            }else{
                res.status(403).json({"error": " a modifier le role introuvable"})
            }
        })
        .catch((err)=>{
            res.status(501).json({"error" : "erreur lors de la recherche du login a modifier le role"})
        });
    }


}