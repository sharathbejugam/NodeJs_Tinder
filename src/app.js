const express =  require('express');
const app = express();
const {adminAuth, userAuth }= require('./middlewares/auth')

app.use('/admin',adminAuth);
app.get('/user',userAuth,(req,res)=>{
    res.send('user data sent')
})

app.get('/admin/getAllData',(req,res)=>{
res.send('All Data Sent')
});

app.get('/admin/deleteUser',(req,res)=>{
    res.send('Deleted data successfully')
})

app.listen(3000,()=>{
    console.log('successfully started listening on port:3000')
})