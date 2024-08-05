//Require express
const express=require("express");
const app=express();

//database connection
const dbs=require("./database/mongodb")

// Body parsing is done here
app.use(express.urlencoded({extended:false}));

//It renders all the static files which come under internal requests
app.use(express.static("public"));
app.use(express.static("js"));
app.use(express.static("images"));

//path
const path=require("path")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//require gym router
const gym_routes=require("./Routes/gym");
const gym_auth=require("./Routes/authentication/auth")
const session=require("./Middleware/Seesion");

//session
app.use(session.sessions);

//global variables
app.use(async function(req,res,next)
{
  res.locals.isauth=req.session.isauth;
  next()
})

//Different pages
app.use("/",gym_routes);
app.use("/",gym_auth);



app.use(function(error,next,req,res)
{
    console.log(error.message);
})

dbs.createdatabase().then(function()
{
    app.listen(3000);
});
