 const jwt = require('jsonwebtoken');
 const User = require('../models/user')
 
const userAuth = async(req,res,next)=>{
    try{
    const {token} = req.cookies;
    console.log('token',token)

    if(!token){
        throw new Error("Token is not valid.....")
    }
    const decodedObj = await jwt.verify(token, "DevTinder@rrru7");
    console.log('decodedObj', decodedObj)
    const {_id} = decodedObj;
    const user = await User.findById(_id);
    console.log('user1', user);
    
    if(!user){
        throw new Error("User not found")
    }
    req.user = user;
    next();
    }catch(err){
        res.status(400).send("User not found")
    }

}
module.exports={ userAuth}
