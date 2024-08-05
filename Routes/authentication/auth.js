const express=require("express");
const router=express.Router();


//router path
const auth_controller=require("../../controllers/auth")

//sign_up page
router.get("/signup",auth_controller.signup);

//login page
router.get("/login",auth_controller.login);

//auth sign_up post
router.post("/sign_up_form",auth_controller.signup_post);

//auth login post
router.post("/login_form",auth_controller.login_post);

//logout
router.get("/logout",auth_controller.logout)

module.exports=router
