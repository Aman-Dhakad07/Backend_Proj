const express = require("express");
const router = express.Router();


//import Controller
const { dummyLink , likePost , unlikePost} = require("../controllers/LikeController");
const { createComment } = require("../controllers/commentController");
const {createPost,getAllPosts}  = require("../controllers/PostController");




//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comment/create", createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.delete("/likes/unlike",unlikePost);




//export
module.exports = router;

