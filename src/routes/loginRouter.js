var express=require('express')
var loginRouter=express.Router();
var {signupModel}=require('../models/signupModel');


function route(key){


    loginRouter.route('/')
    .post((req,res)=>{
        // sess = req.session;
        // sess.email = req.body.email;
        console.log(req.body)
        signupModel.findOne({ email: req.body.email, password: req.body.password }, (err, data) => {
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            if (err) {
                res.json({ Status: "Error" });
            }
            else if (!data) {
                res.json({ Status: "Invalid" });
            }
            else {
                res.json({Status: "Success"});
            }
        });
    })


    
    






    return loginRouter;
}
module.exports=route;