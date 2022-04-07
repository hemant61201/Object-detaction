//import autoincrement from 'mongoose-auto-increment';
const express = require('express');
const mongoose = require('mongoose');
const bcrpyt = require('bcryptjs');
const autoincrement = require('mongoose-auto-increment');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

// const adminSchema = new mongoose.Schema({
//     name: {
//         type : String,
//         required : "Required"
//     },
//     email:{
//         type : String,
//         required : "Required"
//     },
//     password:{
//         type : String,
//         required : "Required"
//     }
// });

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : "Required"
    },
    email:{
        type : String,
        required : "Required"
    },
    password:{
        type : String,
        required : "Required"
    },
    // cpassword:{
    //     type : String,
    //     required : "Required"
    // },
    uname:{
        type : String,
        required : "Required"
    },
    phone:{
        type : Number,
        required : "Required"
    },
     tokens:[
         {
             token: {
                 type: String,
                 required: true
             }
        } 
     ]
});


const productSchemna = new mongoose.Schema({
    p_name:{
        type: String
    },
    p_origin:{
        type: String
    },
    p_price:{
        type: String
    },
    p_mfgyear:{
        type: String
    },
    p_image:{
        type: String
    }
});

// Hashing Password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrpyt.hash(this.password,12);
        // this.cpassword = await bcrpyt.hash(this.cpassword,12);
    }
    next();
});

//We are generating token
userSchema.methods.generateAuthToken = async function() {

    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin , 'User');
// userSchema.plugin(autoincrement.plugin , 'signup');
// citySchema.plugin(autoincrement.plugin , 'City');
// placeSchema.plugin(autoincrement.plugin , 'Place');
// foodSchema.plugin(autoincrement.plugin , 'Food');


// const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchemna);
// const City = mongoose.model("City", citySchema);
// const Place = mongoose.model("Place", placeSchema);
// const Food = mongoose.model("Food", foodSchema);

module.exports = { User,
    Product
    //  Admin , City , Place , Food 
    };

   // module.exports = mongoose.model("bidtobuy", productSchemna , "bidtobuy");