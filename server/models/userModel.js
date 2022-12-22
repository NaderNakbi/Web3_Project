const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    },
    createdAt: {
        type: Date,
        default:Date.now(),
      },
      updatedAt: {
        type: Date,
        default:Date.now(),
      },
})
module.exports = mongoose.model("person",userSchema)