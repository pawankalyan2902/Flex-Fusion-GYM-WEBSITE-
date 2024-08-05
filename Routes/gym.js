//Requiring the function and the we use the middleware router instead of app 
const express=require("express");
const router=express.Router();
const controller=require("../controllers/gym_controller");

//home 
router.get("/",controller.home);

//contact_us page
router.get("/contact-us",controller.contact_us);

//fitness page
router.get("/fitness",controller.fitness);

// healthtips page
router.get("/healthtips",controller.healthtips);

// wintermed page
router.get("/wintermed",controller.wintermed);

// workout page
router.get("/workout",controller.workout);

//Wbeg
router.get("/wbeg",controller.wbeg);

//contact info
router.post("/contact",controller.contact)


module.exports=router;
