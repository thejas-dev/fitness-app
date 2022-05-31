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
/*
const staticPath = path.join(__dirname, "../BMI Calaculator");

const css = path.join(__dirname, "../BMI Calaculator/css");
*/
//const gain = path.join(__dirname, "../BMI Calaculator/css/gain.html");
//const lose = path.join(__dirname, "../BMI Calaculator/css/lose.html");
//app.use(express.static(staticPath));

app.use(express.static('css'));
app.use(express.static('gif'));
//app.use(express.static(gain));
//app.use(express.static('BMI Calaculator'))
app.get('/', function(req,res){
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
        <title>
            BMI Calculator
        </title>
        <link rel="stylesheet" href="style.css">
        <link rel="text/html" href="gain.html">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width,initial-scale=1.0" >
    </head>
    <body>
        <center>
            <h1 class="heading" >
                BMI Calculator
            </h1>
        </center>
        <div class="whole">
        <div class="container-1">
        <div class="bmigraph">
                <figure>
                    <a href="bmi-chart.gif">
                <img src="bmi-chart.gif" width="95%" >
            </a>
                <figcaption>Chart showing body mass index (BMI) for a range of heights <br>
                    and weights in both metric and imperial. Colours indicate BMI <br>
                    categories defined by the World Health Organization; underweight,<br>
                     normal weight, overweight,moderately obese, severely obese and very severely obese.</figcaption>
            </figure>
            
            </div>
    <br>
        <div class="about-bmi">    
        <p>
            <h1 class="glow" >Why BMI?</h1> 
            Body mass index (BMI) is a value derived from the mass (weight) 
            and height of a person. The BMI is defined as the body mass divided
             by the square of the body height, and is expressed in units of 
             kg/m2, resulting from mass in kilograms and height in metres.
    <br>
    <br>
    The BMI may be determined using a table or chart which displays BMI 
    as a function of mass and height using contour lines or colours for 
    different BMI categories, and which may use other units of measurement 
    (converted to metric units for the calculation).
    <br><br>
    The BMI is a convenient rule of thumb used to broadly categorize a person 
    as underweight, normal weight, overweight, or obese based on tissue mass 
    (muscle, fat, and bone) and height. Major adult BMI classifications are 
    underweight (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight
     (25 to 29.9), and obese (30 or more).When used to predict an individual
     's health, rather than as a statistical measurement for groups, the BMI 
     has limitations that can make it less useful than some of the 
     alternatives, especially when applied to individuals with abdominal 
     obesity, short stature, or unusually high muscle mass.
    <br><br>
    BMIs under 20 and over 25 have been associated with higher all-cause 
    mortality, with the risk increasing with distance from the 20 – 25 range.
    </p>
        
        </div>
        </div>
        <div class="container-2">
            <center>
            <h2 class="glow" >
                Enter Your Information Here
            </h2>
            </center>
            <div class="input">
                
                <form class="form">
                    <div class="heightweight">
                    <div class="height">
                <label class="hw">Enter Your Height : </label>
                <input class="input2" name="height" id="height" autocomplete="off" placeholder="Height in CentiMetres" inputmode="numeric" >
                </div>
                <div class="weight">
                <label class="hw">Enter Your Weight :</label>
                <input class="input2" name="weight" id="weight" autocomplete="off" placeholder="Weight In Kg" inputmode="numeric" >
                   </div>    
            </div>
            <center>
            <button type="button" onclick="cal()" class="button" placeholder="submit">Submit</button>
            </center>
                </form>
    
    
            </div>
    
    
    
    
    
        </div>
        <div class="container-3">
            <div class="result">
            <div class="bmivalue">
                <br>
                <label for="bmi"> Your BMI Value </label> <br><br>
                <input class="output" type="text" name="output" id="output" placeholder="Your Bmi" autocomplete="off" > <br> <br> 
            </div>
            
            <div class="bmicatalog">
                
            <center><label style=" font-size: 30px; font-family: Verdana; color: rgb(250, 250, 250); padding-top: 20px;">BMI categories</label></center>
              <center>
                <p style=" text-align: center; font-size: 25px; font-family: 'Times New Roman'">
                    Underweight = Less Than 18.5 <br>
                    Nomral weight = From 18.5 - 24.9 <br>
                    Overweight = From 25 - 29.9 <br>
                    Obesity = 30 And Greater Than 30 <br>
                </p>
                </center>
            </div>
    </div>
        </div>
        <script>
        cal= ()=>{
            const height = document.getElementById("height").value
            const weight = document.getElementById("weight").value
            const height2 = height * height 
            const cal = weight / height2
            const result = cal * 10000
            const result0 = result.toFixed(1).toString()
            document.getElementById("output").value = result0
            
            
            }
        
        </script>
        <div  style="color: white; background-color: rgba(22, 21, 21, 0.699); padding-top: 20px; " id="container-4" class="container-4">
           <center><h1 class="glow">So What Next?</h1></center> <br> <br>
           <center> <span style="color: white; font-size: 35px;" >Explore Some Healthy Routines</span></center> <br> <br>
           <br><br>
            <div class="nav-container">
                <nav>
                    <div class="logo">
                    </div>
                    <ul class="nav-links">
                        <li class="list" ><a class="link" href="lose.html">WeightLoss</a></li>
                        <li class="list" ><a class="link" href="gain.html">WeightGain</a></li>
                        <li class="list" ><a class="link" href="fit.html">Stay Fit At Home</a></li>
                        <li class="list" ><a class="link" href="basicexcercises.html">Basic Excercises</a></li>
                        <li class="list" ><a class="link" href="about us.html">About Us</a></li>
                    </ul>
                    <div class="arrow">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>

                    </div>

                </nav>

            </div>
        </div>
        
<script>
    let button = document.querySelector(".arrow")
     let links = document.querySelector(".nav-links");  
        button.addEventListener("click",()=>{
            links.classList.toggle("display");
            button.children[0].classList.toggle("toggle1");//button children
            button.children[1].classList.toggle("toggle2");//button children
            button.children[2].classList.toggle("toggle3");//button children
        })
               
        
    </script>


        </div>
    </body>
    </html>    `)
})





