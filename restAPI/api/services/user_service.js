const user_model = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let Promise = require('promise');

exports.register = function(req,res){
    return new Promise(function(resolve,reject){
        bcrypt.hash(req.body.pass,10,function(err,hashedPass){
            if(err){console.log(err);reject();}
            else{
                let user_details = new user_model({
                    'name':req.body.name,
                    'email':req.body.email,
                    'pass':hashedPass
                })

                user_details.save(function(err,result){
                    if(err){
                        reject();
                    }else{
                        resolve();
                        console.log('info saved!');
                    }
                });
            }
        })
    })
}

exports.login = function(req,res){
    res.send(req.body);
}