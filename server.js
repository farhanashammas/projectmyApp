const express= require('express');
var app= new express();
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
const mongoose=require('mongoose');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static('dist'));
// app.use(express.static(path.join(__dirname,"/public")));

const signupRouter=require('./src/routes/signupRouter')()
const loginRouter=require('./src/routes/loginRouter')()
const productRouter=require('./src/routes/productRouter')()
// const {productModel}=require('./src/models/productsModel')

app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/products',productRouter)

const uri="mongodb+srv://farhana:farhana@cluster0-o93hy.mongodb.net/test?retryWrites=true&w=majority"

// mongoose.connect("mongodb://localhost:27017/Users");
mongoose.connect(uri)

mongoose.set('useFindAndModify', false);
var db=mongoose.connection;
db.on('error',(error)=>{
    console.log(error);
});
db.once('open',()=>{
    console.log("Success");
})





// var express = require('express');
// var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// app.get('/products',function(req,res){
//         // console.log(req.body)
//         res.header("Access-Control-Allow-Origin", "*")
//         res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//         productModel.find((err, result) => {
//             if (err) {
//                 res.json({ Status: "Error" });
//             }
//             else {
//                 // console.log(result)
//                 res.json({product:result});
//             }
//         }); 
//     });

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});



// app.listen(3000, () => {
//     console.log(__dirname)
//   console.log('listening on port 3000!')
// });