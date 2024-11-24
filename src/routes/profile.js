const express = require('express');
const profileRouter = express.Router();
const {userAuth} = require('../middlewares/auth');
const {validateEditProfileData} = require('../utils/validation')



profileRouter.get("/profile/view",userAuth, async(req,res)=>{
    try{
    const user = req.user;
    console.log('user',user)

    res.send(user)
    }catch(err){
        res.status(400).send("ERROR : " + err.message)
    }
})

profileRouter.patch("/profile/edit",userAuth,async(req,res)=>{
    try{
        if(!validateEditProfileData(req)){
            throw new Error("Invalid edit request")
        }

        const loggedInUser = req.user;
        console.log(loggedInUser);
        Object.keys(req.body).forEach((key)=>(loggedInUser[key] = req.body[key]));
        await loggedInUser.save();
        res.json({message:`${loggedInUser.firstName},your profile updated successfully`,data:loggedInUser})
    } catch(err){
        res.status(400).send("ERROR:"+err.message)
    }
})

profileRouter.patch("/profile/forgotPassword",userAuth,async(req,res)=>{
    try{
        const currentPassword =  req.body.password;
        const isPasswordValid = await bcrypt.compare(currentPassword,passwordHash);
        req.user.password = req.body.password;
        

    }
    catch(err){
        res.status(400).send('password is not cahnged')
    }
})

module.exports = profileRouter;
