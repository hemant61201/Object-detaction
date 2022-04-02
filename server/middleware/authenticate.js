const jwt = require("jsonwebtoken");
const User = require('../model/schema')



const authenticate = async(req, res, next) =>{
    try {
        
        const token = req.cookies.jwtoken;

    } catch (err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

module.exports = authenticate