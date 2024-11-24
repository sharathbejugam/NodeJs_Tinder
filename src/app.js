const express =  require('express');

const connectDB = require("./config/database")
const app = express();
const User = require('./models/user');

const bcrypt = require('bcrypt');
const validator = require('validator');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const {userAuth} = require('./middlewares/auth')


app.use(express.json());
app.use(cookieParser())




// app.get('/user', userAuth, async(req,res)=>{
//     const userEmail = req.body.emailId;

//     try{
//        const users =  await User.findOne({emailId:userEmail});
//        if(users.length === 0){
//         res.status(404).send('User not found')
//        }else{
//            res.send(users)
//        }
//     }
//     catch(err){
//         res.status(400).send("Something went wrong ")
//     }
// })

// app.delete('/user',async (req,res)=>{
//     const userId = req.body.userId
//     try{
//         const deleteUser = await User.findByIdAndDelete();
//         res.send('User deleted Successfully')
//     }catch(err){
//         res.status(400).send('Something went wrong ')
//     }
// })

// app.get('/feed', async(req,res)=>{
//     try{
//         const users = await User.find({});
//         res.send(users)
//     }
//     catch(err){
//         res.status(400).send("Something went wrong ")
//     }
// })

// app.patch('/user', async(req,res)=>{
//     const userId = req.params?.userId;
//     const data = req.body
//     try{
//     const allowed_Updates =["userId","photoUrl","about","gender","age","skills"];
//     const isUpdateAllowed = Object.keys(data).every((k)=>
//         allowed_Updates.includes(k)
//     );
//     if(!isUpdateAllowed){
//        throw new Error("Update not Allowed")
//     }
//     if(data?.skills?.length > 10){
//         throw new error('Skills cannot be more than 10')
//     }
//     const user = await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"after",runValidators:true});
//     console.log(user)
//     res.send("User updated successfully");

//     }
//     catch(err){
//        res.status(400).send("Update Failed "+err.message)
//     }
// })
 
const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);

connectDB().then(()=>{
    console.log("Database connected successfully")
    app.listen(7777,()=>{
        console.log('successfully started listening on port:7777')
    })
}).catch((err)=>{
    console.error('not connected')

})  

