//import model

const Post  = require("../models/postModel");
const Comment = require("../models/commentModel");
const Like = require("../models/likeModel")


//Business logic

exports.createComment = async (req, res) => {
    try{
       //fetch data from req body
       const {post, user, body} = req.body;
       //create a comment object
       const comment = new Comment ({
        post,user,body
       });


     //save the new comment into the database
      const saveComment = await comment.save(); 

      //find the post by id ,add the new comment to its comment array
      const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: saveComment._id}}, {new: true} )
                                   .populate("comments") //populate the comments array with comment documents
                                   .exec();  // to execute this


       res.json({
        post:updatePost,
       });             
    }

    catch(error){
        return res.status(500).json({
            error : "Error While Creating comment",
        });

    }
};