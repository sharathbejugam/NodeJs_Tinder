const mongoose = require('mongoose')

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://namasthedev:Sarikasharath205@namasthenode.g42qe.mongodb.net/devTinder")
};
module.exports = connectDB