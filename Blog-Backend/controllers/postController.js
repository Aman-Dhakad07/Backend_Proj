const Post  = require("../models/postModel");

exports.createPost = async (req,res) => {
    try{
       const {title, body } = req.body;
       const post = new Post({
        title,body,
       });
       const savedPost = await post.save();

       res.json({
        post:savedPost,

       });

    }
    catch(error){
        return res.json(400).json({
            error:" Error while creating post",
        });
    }

};

exports.getAllPosts = async (req,res) => {
    try{
        const posts = await Post.find()
    //    .populate("likes")   //we will execute after writing likecontroller code
       .populate("comments").exec();

        res.json({
            posts,
        })

    }
    catch(error){
          return res.status(500).json({
            error : "Error While Fetching posts",
          });
    }
}