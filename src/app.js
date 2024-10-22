const express =  require('express');
const app = express();
const {adminAuth, userAuth }= require('./middlewares/auth')

app.get('/user',(req,res)=>{
    try{
        throw new error('gujhn')
    }
    catch(err){
        res.status(500).send("sometghing went wrong ")
    }
})

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('Something went wrong')
    }
});


app.listen(3000,()=>{
    console.log('successfully started listening on port:3000')
})