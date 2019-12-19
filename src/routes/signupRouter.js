var express = require('express');
var signupRouter = express.Router();
var {signupModel}=require('../models/signupModel');



function route(){
    signupRouter.route('/')
        .post((req,res)=>{
            // console.log(req.body);
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            signupModel.findOne({ email: req.body.email}, (err, data) => {
                if (err) {
                    res.json({Status:"Error"})
                }else if (data){
                    res.json({Status:"User exists"})
                }
                else if (!data) {
                    if(req.body.password==req.body.confirmPassword)
                {
                     var user = new signupModel(req.body);
                     user.save((err, result) => {
                    if (err) {
                        res.json({ Status: "Error" });
                    }
                    else {
                        console.log(result);
                        res.json({Status:"Success"});
                    }
                });
            }
              else
                 res.json({Status:"Passwords must match"})  
                }          
        })   
        })


        signupRouter.route('/profile')
        .post((req, res) => {
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            signupModel.find({email:req.body.email},(err, result) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    console.log(result)
                    res.json({user:result});
                }
            });
        });

        signupRouter.route('/users')
        .get((req, res) => {
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            signupModel.find((err, result) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    console.log(result)
                    res.json({user:result});
                }
            });
        });

        signupRouter.route('/delete')
       
        .post((req,res)=>{
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            // console.log(req.body)
            signupModel.findOneAndDelete(req.body.email,(err,result)=>{
                // console.log(req.body.email)
                if(err){
                    res.json({Status:"Error"});
                }
                else{
                    res.json({Status:"Success"});
                }
            });
        });

    return signupRouter;

}
module.exports=route;
    