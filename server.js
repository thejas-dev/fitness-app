const bodyparser = require('body-parser')
const path= require("path")
let express = require("express")
let mongodb = require("mongodb");
 
const MongoClient = mongodb.MongoClient;

let app = express()
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



let port= process.env.PORT
if(port == null || port == "" ){
    port  = 3020
}

const staticPath = path.join(__dirname, "../BMI Calaculator");

const css = path.join(__dirname, "../BMI Calaculator/css");

//const gain = path.join(__dirname, "../BMI Calaculator/css/gain.html");
//const lose = path.join(__dirname, "../BMI Calaculator/css/lose.html");
app.use(express.static(staticPath));

app.use(express.static(css));
//app.use(express.static(gain));
//app.use(express.static('BMI Calaculator'))
app.get('/', function(req,res){
    res.send(`  `)
})
app.post('/lose.html', function(req,res){
    res.redirect('/')
})




