const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    status:{type:Number, default:0},
    role:{type:String, default:"admin"} //0-pending, 1-approved, 2-rejected
},{
    timeStamp:true
})

module.exports = mongoose.model("User", UserSchema)