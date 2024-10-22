const express =  require('express');
const app = express();

app.get('/user',(req,res,next)=>{
    console.log("Handling route user ");
    next();
},
(req,res,next)=>{
    console.log("Handling route user2 ");
    next();

},
(req, res, next)=>{
    console.log("Handling route user3 ");
    next();
},
(req, res, next)=>{
    console.log("Handling route user4 ");
    next();
},
(req, res, next)=>{
    console.log("Handling route user5 ");
   res.send('5th Response')
},

)

app.listen(3000,()=>{
    console.log('successfully started listening on port:3000')
})