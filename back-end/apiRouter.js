//Import
var express = require("express");
var loginCtrl = require("./routes/loginCtrl");
var voitureCtrl = require("./routes/voitureCtrl");

exports.router = (()=>{
    var apiRouter = express.Router();

    // login(user)
    apiRouter.route("/logins/register/").post(loginCtrl.register);
    apiRouter.route("/logins/connexion/").get(loginCtrl.connexion);
    apiRouter.route("/logins/info/").get(loginCtrl.info_user);
    apiRouter.route("/logins/update/").put(loginCtrl.update_user);

    // voiture
    apiRouter.route("/voiture/register").post(voitureCtrl.register);
    apiRouter.route("/voiture/info").get(voitureCtrl.info_vehicule);
    apiRouter.route("/voiture/update").put(voitureCtrl.update_vehicule);
    apiRouter.route("/voiture/del").delete(voitureCtrl.del_vehicule);



    return apiRouter;
})();
