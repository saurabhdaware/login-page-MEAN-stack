module.exports = function(app){
    let user_service = require('../services/user_service');
    let Promise = require('promise');

    app.post('/register',function(req,res){
        user_service.register(req,res)
        .then(()=>{
            user_service.login(req,res)
            .then((val)=>{res.status(200).json(val)})
            .catch((err)=>{res.json(err)});
        })
        .catch(() => {
            res.json({registration:'failed',reason:"Registration failed"});
        })
    });

    app.post('/login',function(req,res){
        user_service.login(req,res)
        .then((val)=>{res.status(200).json(val)})
        .catch((err)=>{res.json(err)});
    })
             
    app.post('/auth',function(req,res){
        user_service.jwtAuth(req,res)
        .then((auth)=>{
            res.json(auth);
        })
        .catch((err)=>{
            res.json(err);
        })
    })
    
}