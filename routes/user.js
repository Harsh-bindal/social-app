const router=require("express").Router();
const bcrypt=require("bcrypt");
const User =require("../models/Users");

//read/get user
//update user
//delete user
//follower
//following
//unfollow
//get friends


//update user
router.put("/:id", async (req,res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin)
  {
    try{  
        if(req.body.password)
        {
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt);
        }
        }catch(err){
            res.status(500).json(err);
        }
        try{
            const user=await User.findByIdAndUpdate(req.params.id,{$set : req.body,});
            res.status(200).json("Account has been updated");
        }
        catch(err){
            res.status(500).json(err);
        }
    
  }
  else
  {
    res.status(403).send("you can update only your id");
  }
})

//Delete user
router.delete("/:id", async (req,res)=>{
    if(req.params.id === req.body.userId || req.body.isAdmin)
    {
       try{
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Account has been deleted")
       }
       catch(err){
        res.status(500).json(err)
           }
    }
    else
    {
        res.status(403).send("you cant delete another user account")
    }
})


//Get one user by name Or ID
router.get("/", async (req,res) =>{
    const userId= req.query.userId;
    const username = req.query.username ? req.query.username.toLowerCase() : null;
    try{

         const user = userId ?await User.findById(userId) : await User.findOne({ name: { $regex: new RegExp(`^${username}$`, 'i') } });
         if (!user) {
            return res.status(404).json("User not found");
        }
         const {password,updatedAt,...other} =user._doc
         res.status(200).json(other)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//follow account
router.put("/:id/follow", async (req,res)=>{
    
    if(req.params.id !== req.body.userId)
    { 
        const user= await User.findById(req.params.id);
        const currentUser= await  User.findById(req.body.userId);
        try{
            if(!user.followers.includes(req.body.userId))
            {
                  await user.updateOne({$push : {followers: req.body.userId}});
                  await currentUser.updateOne({$push : {followings : req.params.id}})

                  res.status(200).send("User has been followed")
            }
            else
            {
                res.send(403).send("You already follow this account!")
            }
        }
        catch(err)
        {
            res.status(500).json(err)
        }

    }

    else
    {
        res.status(403).send("You cant follow yourself")
    }
    
})

//unfollow account
router.put("/:id/unfollow", async (req,res) => {
        if(req.params.id !== req.body.userId)
        {
           const user= await User.findById(req.params.id);
           const currentUser=await  User.findById(req.body.userId);

            try{
                if(user.followers.includes(req.body.userId))
                {
                    await user.updateOne({$pull : {followers : req.body.userId}})
                    await currentUser.updateOne({$pull : {followings : req.params.id}})
                    
                    res.status(200).send("User has been unfollowed")
                }
                else
                {
                    res.status(403).send("You dont follow this account")
                }
            }
            catch(err)
            {
                res.status(500).json(err)
            }
         
        }

        else
        {
            res.status(403).send("You cant unfollow yourself")
        }
});


router.get("/friends/:userId",async (req,res)=>{

    try{

        const user= await User.findById(req.params.userId);
    
        const friends=await Promise.all(user.followings.map(friendId=>{
            return User.findById(friendId);
        }));
    
        let friendList=[];

        friends.map(friend=>{
            const {_id,name,profilePicture}=friend;
            friendList.push({_id ,name,profilePicture});
        });

        res.status(200).json(friendList);
    } 
    catch(err){
        res.status(500).json(err);
    }

})

module.exports = router