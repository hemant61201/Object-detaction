//import autoincrement from 'mongoose-auto-increment';
const mongoose = require('mongoose');
const bcrpyt = require('bcryptjs');
const autoincrement = require('mongoose-auto-increment');

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
    token:{
        type:String,
        token:{
            
        }
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

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin , 'User');
// userSchema.plugin(autoincrement.plugin , 'signup');
// citySchema.plugin(autoincrement.plugin , 'City');
// placeSchema.plugin(autoincrement.plugin , 'Place');
// foodSchema.plugin(autoincrement.plugin , 'Food');


// const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
// const City = mongoose.model("City", citySchema);
// const Place = mongoose.model("Place", placeSchema);
// const Food = mongoose.model("Food", foodSchema);

module.exports = { User
    //  Admin , City , Place , Food 
    };

