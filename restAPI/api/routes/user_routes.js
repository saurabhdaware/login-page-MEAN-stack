module.exports = function(app){
    let user_service = require('../services/user_service');
    let Promise = require('promise');

    app.post('/register',function(req,res){
        user_service.register(req,res)
        .then(()=>{
            user_service.login(req,res);
        })
        .catch(() => {
            res.send("Registration failed");
        })
    });

    app.route('/login').post(user_service.login);
    
}