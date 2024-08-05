const dbs = require("../database/mongodb");

class Contact{
    constructor(name, email, number, message) {
         this.name=name ,
         this.email=email,
         this.number=number,
         this.message=message
    }
    async insert() {
        const data =await dbs.getdb().collection("contact_info").insertOne(
            {
                name: this.name,
                email:this.email,
                number:this.number,
                message:this.message
            });
        return data;
    }

    async find() {
        const data =await dbs.getdb().collection("contact_info").findAll({});
        return data;
    }
}

module.exports=Contact;