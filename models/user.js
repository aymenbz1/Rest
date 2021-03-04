const mongoose = require("mongoose")
const schema = mongoose.Schema

const user= new schema({
    name:{type:String},
    email:{type:String},
    age:{type:Number},
});


module.exports= User = mongoose.model("user", user)