const bodyparser = require('body-parser')
let path= require("path")
var cons = require('consolidate');

let express = require("express")
let app = express()

let mongodb = require("mongodb");
 
const MongoClient = mongodb.MongoClient;


let db= null;

app.use(bodyparser.urlencoded({extended:true}))

let a = `mongodb+srv://Thejashari:letmegoin@bmi.oj1kl.mongodb.net/Data?retryWrites=true&w=majority`
MongoClient.connect(a,{useNewUrlParser:true,useUnifiedTopology: true }, function(err,client){
    if (err){
        throw err
    }
    db=client.db()
    app.listen(port)
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const path1 = path.join(__dirname, "/css");
const path2 = path.join(__dirname, "/gif"); 
app.use(express.static(__dirname + '/css')); 

app.engine('html' , cons.swig); //using consolidates
app.set('views' ,path1) //defining view paths
app.set('view engine', 'html'); //defining view path as html



let port= process.env.PORT
if(port == null || port == "" ){
    port  = 3020
}

app.use(express.static(path1));
app.use(express.static(path2));

app.get('/', function(req,res){
    res.render("index")
})
app.get('/gain', function(req,res){
    res.render("gain")
})
app.get('/lose',function(req,res){
    res.render("lose")
})
app.get('/fit',function(req,res){
    res.render("fit")
})
app.get('/about',function(req,res){
    res.render("about us");
})
app.get('/basicexcercises',function(req,res){
    res.render("basicexcercises");
})


app.post('/submit' , (req,res)=>{
    db.collection('Bmidata').insertOne({
        name:req.body.name,
        email:req.body.email,
        review:req.body.review
    
    },function(){
        res.redirect(`back`);
    });
})





