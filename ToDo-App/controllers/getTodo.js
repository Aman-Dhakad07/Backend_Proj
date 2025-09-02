const Todo = require("../models/Todo");



exports.getTodo = async(req,res) => {
    try{      
        //fetch all todo items from databsase 
        const todo = await Todo.find({});

        //response 
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Entire data is Fetched",
        })
    }
    catch(err){
      console.log(err);
      res.status(500)
      .json({
        success:false,
        error:err.message,
        message:err.message,
        message:"Server Error",
      })

    }
}

exports.getTodoById = async(req, res)  =>  {
     try{      
        //extract todo item based on ID
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id})

        ////data foegiven id not found 
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No Data found with given id",
            })
        }
        //data for given id Found
        res.status(200).json({   
        success:true,
        data:todo,
        message:"No Data found with given id",
    })
      
    }
    catch(err){
      console.log(err);
      res.status(500)
      .json({
        success:false,
        error:err.message,
        message:err.message,
        message:"Server Error",
      })
    

}
}