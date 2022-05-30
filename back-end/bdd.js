function dbconnect(){
    var bd = require("mysql");
    var connection = bd.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'group_dl'
    })

    connection.connect();

}

module.exports = dbconnect;