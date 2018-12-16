var config = require('./../config.js');
var mysql = require('mysql');
var db = mysql.createConnection(config.mysql_connect);

var getAll = function(){
    db.connect(function(err){
        if(err) 
            throw err;
        console.log("Connected !! ")
        var id = 1;
        var sql = "SELECT * FROM cds_course \
                    WHERE crs_id = " + id
        db.query(sql, function(err, result, fields){
            if(err)
                throw err;
            return result;
        });//query
    })//connect
}//getAll

var getById = function(id){
    db.connect(function(err){
        if(err) 
            throw err;
        console.log("Connected !! ")
        var id = 1;
        var sql = "SELECT * FROM cds_course \
                    WHERE crs_id = " + id
        db.query(sql, function(err, result, fields){
            if(err)
                throw err;
            return result;
        });//query
    })//connect
}//getAll


//export models
exports.getAll = getAll
exports.getById = getById