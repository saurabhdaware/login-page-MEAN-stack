module.exports = function(app){
    let user_service = require('../services/user_service');
    let Promise = require('promise');

    app.post('/register',function(req,res){ // if user requests register this function is going to run
        user_service.register(req,res)
        .then(()=>{ // after saving data if promise is resolved we login user 
            user_service.login(req,res) // exports.login function inside 'services/user_service' is called
            .then((val)=>{res.status(200).json(val)}) // if login is success data is returned;
            .catch((err)=>{res.json(err)}); // if error, error is returned
        })
        .catch(() => { // if anything goes wrong registration failed is returned
            res.json({registration:'failed',reason:"Registration failed"});
        })
    });

    app.post('/login',function(req,res){
        user_service.login(req,res) 
        .then((val)=>{res.status(200).json(val)})
        .catch((err)=>{res.json(err)});
    })
             
    app.post('/auth',function(req,res){ // this is to check if the access key stored in localstorage is valid or not
        user_service.jwtAuth(req,res) // exports.jwtAuth function inside 'services/user_service' is called
        .then((auth)=>{ // if all goes well data is returned (NOTE: This is the only way to get data of user other functions only return flags)
            res.json(auth);
        })
        .catch((err)=>{ // if any error, error is returned
            res.json(err);
        })
    })
    
}