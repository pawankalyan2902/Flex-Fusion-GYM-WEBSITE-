const auth_model = require("../models/auth")

function signup(req, res) {
    let signup_data = req.session.signup_session;
    // flashing data
    if (!signup_data) {
        signup_data = {
            error: "",
            error_message: "",
            email: "",
            confirm_email: "",
            password: "",
            name: "",
            city: ""
        }

    }
    req.session.signup_session = null;
    res.render("signup", { signup_data: signup_data });
}




async function login(req, res) {
    let login_data = req.session.login;
    if (!login_data) {
        login_data = {
            error: "",
            email: "",
            error_message: "",
        }
    }
    req.session.login = null;
    res.render("login", { login_data: login_data });
};


//post signup
async function signup_post(req, res) {
    const data = req.body;
    const sign_up_data = new auth_model(data.email, data.confirm_email, data.password, data.name, data.city);
    const signed_up = await sign_up_data.find();
    if (signed_up) {
        req.session.signup_session = {
            error: true,
            error_message: "This email is already exsisting",
            email: data.email,
            confirm_email: data.confirm_email,
            password: data.password,
            name: data.name,
            city: data.city
        }
        res.redirect("/signup");
    }
    else if (data.email != data.confirm_email) {
        req.session.signup_session = {
            error: true,
            error_message: "the email doesn't match with confirm email",
            email: data.email,
            confirm_email: data.confirm_email,
            password: data.password,
            name: data.name,
            city: data.city
        }
        res.render("signup", { signup_data: signup_data });
    }
    else {
        sign_up_data.insert();
        res.redirect("/login")
    }
}

//post login
async function login_post(req, res) {
    const data = req.body;
    const s_data = new auth_model(data.email, data.password);
    const log_data =await s_data.find();
    if (!log_data) {
        req.session.login = {
            error: true,
            email: data.email,
            error_message: "NOt signed up yet",
        }
        res.redirect("/login");
    }
    else if (data.password != log_data.password) {
        req.session.login = {
            error: true,
            email: data.email,
            error_message: "Password enterd is wrong",
        }
        res.redirect("/login");
    }
    else
    {
        req.session.isauth=true;
        res.redirect("/")
    }
}

function logout(req,res)
{
    req.session.isauth=null;
    res.redirect("/");
}



module.exports = {
    signup: signup,
    login: login,
    signup_post: signup_post,
    login_post: login_post,
    logout:logout
}