const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',async (req,res)=>{
    
    try
    { 
  const fPost= await Post.find();
  res.json(fPost);
  }catch(err){
        res.json({message:err});
    }
});


router.post('/',async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description,
    });
   try
    { 
  const savedPost= await post.save();
  res.json(savedPost);
  }catch(err){
        res.json({message:err});
    }

});

router.get('/:postId',async (req,res)=>{
    try
    { 
  const fPost= await Post.findById(req.params.postId);
  res.json(fPost);
  }catch(err){
        res.json({message:err});
    }
});

router.delete('/:postId',async (req,res)=>{
    try
    { 
  
        const dPost= await Post.remove({id:req.params.postId});
  res.json(dPost);
  }catch(err){
        res.json({message:err});
    }
});

router.patch('/:postId',async (req,res)=>{
    try
    { 
  
        const uPost= await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}});
  res.json(uPost);
  }catch(err){
        res.json({message:err});
    }
});

module.exports = router;

