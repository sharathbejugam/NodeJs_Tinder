const validator = require('validator');

const validationSignupData = (req)=>{
    const {firstName,lastName,emailId,password}= req.body;

    if(!firstName ||!lastName){
        throw new Error("Name is not valid")
    }
    else if(!validator.isEmail(emailId)){
        throw new Error('Email is not valid')
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong password")
    }

    
}

const validateEditProfileData = (req)=>{
    const allowedEditFields = ["firstName","lastName","emailId","photourl","gender","age","about","skills"];
    const isEditAllowed = Object.keys(req.body).every(field=>
        allowedEditFields.includes(field)
    );
    console.log('isEditAllowed',isEditAllowed)
    return isEditAllowed;

}
module.exports ={
    validationSignupData,
    validateEditProfileData
}