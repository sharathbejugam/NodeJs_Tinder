const express =  require('express');

const connectDB = require("./config/database")
const app = express();
const User = require('./models/user');

app.use(express.json()) 

app.post('/signup',async (req,res)=>{
    

    const user = new User(req.body);
    try{
        await user.save();
    res.send('user added successfully')
    }catch(err){
        res.status(400).send('error saving teh user data ')
    }
})

app.get('/user', async(req,res)=>{
    const userEmail = req.body.emailId;

    try{
       const users =  await User.findOne({emailId:userEmail});
       if(users.length === 0){
        res.status(404).send('User not found')
       }else{
           res.send(users)
       }
    }
    catch(err){
        res.status(400).send("Something went wrong ")
    }
})

app.delete('/user',async (req,res)=>{
    const userId = req.body.userId
    try{
        const deleteUser = await User.findByIdAndDelete();
        res.send('User deleted Successfully')
    }catch(err){
        res.status(400).send('Something went wrong ')
    }
})

app.get('/feed', async(req,res)=>{
    try{
        const users = await User.find({});
        res.send(users)
    }
    catch(err){
        res.status(400).send("Something went wrong ")
    }
})

app.patch('/user', async(req,res)=>{
    const userId = req.body.userId;
    const data = req.body
    try{
        await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"after",runValidators:true});
        res.send("User updated successfully")
    }
    catch(err){
       res.status(400).send("Update Failed "+err.message)
    }
})
 


connectDB().then(()=>{
    console.log("Database connected successfully")
    app.listen(7777,()=>{
        console.log('successfully started listening on port:7777')
    })
}).catch((err)=>{
    console.error('not connected')

})  

