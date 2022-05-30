// Imports
var models = require("../models");
const voiture = require("../models/voiture");
var dbconnect = require("../bdd");


module.exports = {


    register : (req, res)=>{

        var marque = req.body.marque;
        var serie_number = req.body.serie_number;
        var person_id = req.body.person_id;;
        

        if(marque == null || serie_number==null || person_id==null ){
            res.status(401).json({"error": "parametre(s) manquants"});
        }
     

        models.Login.findOne({
            where : { id : person_id}
        })
        .then((loginFound)=>{
            if(loginFound){
                var newVoiture = models.voiture.create({
                    LoginId : loginFound.id,
                    marque : marque,
                    serie_number : serie_number
                })
                .then((newVoiture)=>{
                    if(newVoiture){   
                        return res.status(201).json({
                            "voiture" : newVoiture.id,
                            "info" : "Vehicule enregistré avec succes"
                        });
                    }else{
                        res.status(410).json({"error":"erreur de saisie d'enregidtrement de vehicule"}); 
                    }
                })
                .catch((err)=>{
                    return res.status(500).json({"error":"erreur lors de l'enregistrement de vehicule"});
                }); 
            }
            else{
                res.status(401).json({"error": "l'utilisateur n'existe pas"});
            }
        })
        .catch((err)=>{
            res.status(500).json({"error": "Impossible de rechercher dans la liste des utilsateurs existants"});
        });
    },

    info_vehicule : (req, res)=>{
        var db = dbconnect()

        var id = req.body.id;

        db.query("SELECT * FROM voitures WHERE id=?",[id], (err, result, field) => {
            if (err) throw err
            res.status(200).send(result)
        })
    },


    update_vehicule :(req, res) =>{

        var id = req.body.id;
        var marque = req.body.marque;
        var serie_number = req.body.serie_number;
        var person_id = req.body.person_id

        models.Login.findOne({
            where : { id : person_id }
        })
        .then((loginFound)=>{
            if(loginFound){
                models.Voiture.findOne({
                    where : {id : id}
                })
                .then((voitureFound)=>{
                    if(voitureFound){
                        voitureFound.update({
                            marque : marque,
                            serie_number : serie_number,
                            LoginId : loginFound.id 
                        })
                        .then(()=>{
                            return res.status(200).json({
                                "info" : "Voiture modifiée avec succès"
                            })
                        })
                        .catch((err)=>{
                            res.status(413).json({"error": "la voiture n'a pas pu être mofifiée"})
                        });
                    }else{
                        res.status(403).json({"error": "login introuvable"})
                    }
                })
                .catch((err)=>{
                    res.status(501).json({"error" : "erreur lors de la recherche de la voiture a modifier"})
                });
            }else{
                res.status(403).json({"error": "login introuvable"})
            }
        })
        .catch((err)=>{
            res.status(501).json({"error" : "erreur lors de la recherche des cousiers inscris"})
        })

    },


    del_vehicule :(req, res) =>{

        var id = req.body.id;
        var marque = req.body.marque;
        var serie_number = req.body.serie_number;
        var person_id = req.body.person_id

        models.Login.findOne({
            where : { id : person_id }
        })
        .then((loginFound)=>{
            if(loginFound){
                models.Voiture.findOne({
                    where : {id : id}
                })
                .then((voitureFound)=>{
                    voitureFound.destroy()
                })
                .catch((err)=>{
                    res.status(501).json({"error" : "erreur lors de la recherche de la voiture a supprimer"})
                });
            }else{
                res.status(403).json({"error": "login introuvable"})
            }
        })
        .catch((err)=>{
            res.status(501).json({"error" : "erreur lors de la recherche des logins inscris"})
        })
    }


}