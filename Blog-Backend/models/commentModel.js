//import mongoose instance
const mongoose = require("mongoose");



//route handler
const comentSchema  = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //this is a reference to the post model

    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});


//export
module.exports = mongoose.model("Comment", comentSchema);