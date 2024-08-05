//Requiring the function and the we use the middleware router instead of app 

//data
const contact_data_model=require("../models/contact_info");

//Home page
function home(req,res)
{
    // let isauthenticated;
    // if(req.session.isauth)
    // {
    //     isauthenticated=true;
    // }else{
    //     isauthenticated=false;
    // }
    res.render("index");
}

//Takes you to contact_us
function contact_us(req,res)
{
    res.render("contact-us");
}

//fitness page
function fitness(req,res)
{
    res.render("fitness");
}

//healthtips page
function healthtips(req,res)
{
    res.render("wbeg");
}

//wintmed page
function wintermed(req,res)
{
    res.render("wintermed");
}

//workout page
function workout(req,res)
{
    res.render("workout");
}


//wbeg page
function wbeg(req,res)
{
    res.render("wbeg");
}

//contact page
async function contact(req,res)
{
    const data=req.body;
    const contact_data=new contact_data_model(data.name,data.email,data.number,data.message);
    const dataa=await contact_data.insert();
    res.redirect("/")
    
}


module.exports={
    home:home,
    contact_us:contact_us,
    fitness:fitness,
    healthtips:healthtips,
    wintermed:wintermed,
    workout:workout,
    wbeg:wbeg,
    contact:contact
}