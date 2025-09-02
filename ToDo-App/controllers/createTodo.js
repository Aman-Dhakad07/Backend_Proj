//import the model 
const Todo = require("../models/Todo");


//defie the route handler


exports.createTodo = async(req,res) => {
    try{
        //extract title and descriptiion from request body
        const {title, description}  = req.body;
        //create a new to do obj and insert in DB
        const response = await Todo.create({title,description});
        //semd a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Sucessfully'
            }
        );
    }
    catch(err){
       console.error(err);
       console.log(err);
       res.status(500)
       .json({
        success:false,
        data:"internal server error",
        message:err.message,
       }) 
    }
}