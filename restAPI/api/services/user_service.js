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
    return new Promise(function(resolve,reject){
        user_model.findOne({email:req.body.email},function(err,result){
            if(err){
                console.log(err);
                reject(err);
            }else if(!result){
                reject('Entered email id is not registered');
            }else if(result){
                bcrypt.compare(req.body.pass, result.pass,function(err,value){ // compare passwords
                    if(err){
                        reject('Wrong Password try again');
                    }
                    if(value){
                        let payload = {
                            name:result.name+'sup?world'
                        }
                        let secretKey = 'secretKey22499';

                        let token = jwt.sign(payload,secretKey,{expiresIn:1440}); // access token :: to be stored in user local storage

                        resolve({login:'success',token:token});
                    }else{
                        reject('Wrong Password try again');
                    }
                })
            }
        })
    })
}

// exports.jwtAuth = function(token,user){
//     jwt.verify(token,'secretKey22499',function(err,decoded){
//         if(decoded.name == user){resolve({})}
//     })
// }