const express =  require('express');
const app = express();

app.use('/user',(req,res)=>{
    res.send('Hhhhahahha')
})

app.get('/user',(req,res)=>{
    res.send({firstName:'Sharath',lastName:'Kumar'})

})
app.post('/user',(req,res)=>{
    res.send("Data Saved successfully to the DB");
})

app.delete('/user',(req,res)=>{
    res.send('deleted the data successfully')
})

app.listen(3000,()=>{
    console.log('successfully started listening on port:3000')
})