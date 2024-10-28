const mongoose = require('mongoose')

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://namasthedev:Sarikasharath143@namasthenode.g42qe.mongodb.net/devTinder")
};
module.exports = connectDB