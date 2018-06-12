const user_model = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let Promise = require('promise');

exports.register = function(req,res){
    return new Promise(function(resolve,reject){
        bcrypt.hash(req.body.pass,10,function(err,hashedPass){ // This is to hash password
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
                        resolve(); // if success? promise is resolved
                        console.log('info saved!');
                    }
                });
            }
        })
    }) 
}

exports.login = function(req,res){
    return new Promise(function(resolve,reject){
        user_model.findOne({email:req.body.email},function(err,result){
            if(err){
                console.log(err);
                reject({login:'fail',reason:err});
            }else if(!result){
                reject({login:'fail',reason:'Entered email id is not registered'});
            }else if(result){
                bcrypt.compare(req.body.pass, result.pass,function(err,value){ // compare passwords
                    if(err){
                        reject({login:'fail',reason:'Wrong Password try again ' + err});
                    }
                    if(value){
                        let payload = {
                            id:result._id
                        } // you can encode anything you want
                        let secretKey = 'secretKey22499'; // put any random secret key to pass through jwt

                        let token = jwt.sign(payload,secretKey,{expiresIn:1440}); // access token :: to be stored in user local storage

                        resolve({login:'success',token:token,name:result.name});
                    }else{
                        reject({login:'fail',reason:'Wrong Password try again'});
                    }
                })
            }
        })
    })
}

exports.jwtAuth = function(req,res){
    return new Promise(function(resolve,reject){
        jwt.verify(req.get('access-token'),'secretKey22499',function(err,decoded){
            user_model.findById(decoded.id,{pass:0},function(err,result){
                if(err){
                    reject({auth:'fail',reason:err});
                } 
                if(!result){
                    reject({auth:'fail',reason:'user doesnt exist'});
                }
                if(result){
                    if(result.name == req.body.name){ // just to be on the safer side we check if the name passed through is same as name in database
                        resolve({auth:'success',user:result});
                    }else{
                        reject({auth:'fail',reason:'different user'});
                    }
                }
            })
        })
    })
}