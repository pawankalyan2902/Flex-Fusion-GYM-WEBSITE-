let db=require("../database/mongodb");

class Auth{
constructor(email,confirm_email,password,full_name,city)
{
    this.email=email,
    this.confirm_email=confirm_email,
    this.password=password,
    this.full_name=full_name,
    this.city=city
}
    async insert()
    {
        const auth_data=await db.getdb().collection("signup").insertOne({
            email:this.email,
            confirm_email:this.confirm_email,
            password:this.password,
            full_name:this.full_name,
            city:this.city
        })
    };

    async find()
    {
        const data=await db.getdb().collection("signup").findOne({email:this.email});
        return data;
    };
}

module.exports=Auth;