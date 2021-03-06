const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('../db/connectdb');
var { User, Contact } = require("../model/schema");
const authenticate = require('../middleware/authenticate'); 
var { Product } = require("../model/schema");

router.post('/signup', async (req, res) => {
    const { name, email, uname, password, cpassword, phone } = req.body;
    if (!name || !email || !password || !cpassword || !uname || !phone) {
        return res.status(422).json({ error: "All fields are required" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        // console.log("before condition");
        if (userExist) {
            return res.status(422).json({ error: "Email already in use" });

        } else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords do not match" });
        }
        else {
            const user = new User({ name, email, uname, password, cpassword, phone });
            await user.save();
            res.status(201).json({ message: "User Registered Successfully!" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    //admin login
    else if (email == "admin@gmail.com" && password == "admin") {
        console.log("Admin sign in successful");
        return res.status(201).json({ message: "Admin login successful" });
    }

    try {
        // const jwtoken;
        const user = await User.findOne({ email: email });

        const valid = await bcrypt.compare(password, user.password);
        
        // const token = await user.generateAuthToken();
        // console.log(token);

        // res.cookie('jwtoken',token,{
        //     expires:new Date(Date.now + 25892000000),
        //     httpOnly:true
        // })

        if (user && valid) {
            return res.status(422).json({ error: "Signin Success" });
        }
        else if (user) {
            return res.status(400).json({ error: "Incorrect Password" });
        }
        else if (valid) {
            return res.status(400).json({ error: "User Not Found" });
        }
    } catch (err) {
        console.log(err);
    }
});


router.post('/viewproducts', async (req, res) => {

    //const pname = new Product({ p_name:"dhwanishingala" , p_origin:"2000",p_price:"1000",p_mfgyear:"1990" });
    //console.log(pname);
    //        await pname.save(); 
    //res.status(201).json({ message: "User Registered Successfully!" });

    const pname = req.body.pname  ;
     console.log("Pname "+ pname);

     const products = await Product.find({p_name: { $regex: '.*' + pname + '.*' } });
     console.log( typeof products);
    //  console.log(products);
    if ( products.length == 0){
        console.log("not a valid search");
        res.status(400).json({ message: "No a valis search"});
    }
     //const products = await Product.findOne({ p_name : pname });
     else{
         console.log(products);
     res.json({products});
     }
});


router.post('/viewproductsbyid', async (req, res) => {

    const pnum = req.body.p_no ;
    // console.log(typeof pnum);
    //  console.log("Pname "+ pnum);
    //  const pnum1 = pnum.toLowerCase()+" "; 
    //  console.log(pnum1);
    //  console.log(typeof pnum1);

    //  console.log(typeOf pnum1);
     const pnum1 = pnum.trim().toLowerCase();
    console.log(pnum1);
    const products = await Product.find({ p_no: pnum1 });
     console.log(products);
    //  console.log(typeof products);
     res.json({products});

});

router.post('/addproduct', async(req,res) =>{

    const {p_name, p_origin, p_price, p_mfgyear, p_image } = req.body;

     const pname = new Product({ p_name:p_name, 
        p_origin:p_origin,
        p_price:p_price,
        p_mfgyear:p_mfgyear,
        p_image:p_image
    });
    console.log(pname);
    await pname.save(); 
    res.status(201).json({ message: "User Added Product Successfully!" });
});

router.post('/contact', async (req, res) => {
    const { name, email, feedback } = req.body;
    if (!name || !email || !feedback) {
        return res.status(422).json({ error: "All fields are required" });
    }
    try {
        
            const feedbacks = new Contact({ name, email, feedback});
            await user.save();
            res.status(201).json({ message: "Feedback Received!" });
    } catch (err) {
        console.log(err);
    }
});

// router.get('/upload',authenticate, (req,res)=>{
//     console.log("hello my upload page");
//     res.send(req.rootUser);
// })

// router.post('/navbar', async(req, res) => {
//     try {   
//         const { searchInput } = req.body;
//     } catch (err) {
//         console.log(err);
//     }
// })

// router.post('/signin', async (req, res) => {

//     try {
//         let token;
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         if (password.length < 8) {
//             return res.status(400).json({ error: "invalid credentials" });
//         }
//         console.log(password.length);
//         const userLogin = await User.findOne({ email: email });


//         if (userLogin) {
//             const isMatch = await bcrypt.compare(password, userLogin.password);

//             if (!isMatch) {
//                 res.status(400).json({ error: "invalid credential" });
//             } else {
//                 token = await userLogin.generateAuthToken();
//                 console.log(token);

//                 res.cookie("jwtoken", token, {
//                     expires: new Date(Date.now() + 25892000000),
//                     httpOnly: true
//                 });
//                 res.json({ message: "user sign in successfully" })
//             }
//         } else {
//             res.status(400).json({ error: "Invalid Credential" })
//         }
//     } catch (err) {
//         console.log(err);
//     }

// });

// router.post('/addcity', async (req, res) => {
//     const { image, name, details, location,latitude,longitude } = req.body;
//     if (!image || !name || !details || !location || !latitude || !longitude || image == " ") {
//         return res.status(500).json({ error: "All fields are required" });
//     }
//     else {
//         const city = new City({ image, name, details, location,latitude,longitude });
//         city.save();
//         res.status(422).json({ message: "City Information Added Successfully" });
//     }
// });

// router.post('/displaycity', async (req, res) => {
//     const cityname = await City.find();
//     res.json(cityname);
// });

// router.post('/viewcity', async (req, res) => {
//     const { id } = req.body;
//     const city = await City.findById(id);
//     res.json(city);
// });

// router.post('/editcity', async (req, res) => {
//     const id = req.body.id;
//     const image = req.body.image;
//     const name = req.body.name;
//     const details = req.body.details;
//     const location = req.body.location;
//     const latitude = req.body.latitude;
//     const longitude = req.body.longitude;
//     City.updateOne({ _id: id },
//         {
//             $set: {
//                 "image": image,
//                 "name": name,
//                 "details": details,
//                 "location": location,
//                 "latitude": latitude,
//                 "longitude": longitude
//             }
//         }).then(
//             () => { 
//                 res.status(422).json({ message: "Done" });
//             }
//         ).catch(
//             (error) => {
//                 res.status(400).json({ error: error });
//             }
//         )
// });

// router.post('/deletecity', async (req, res) => {
//     const { id } = req.body;
//     City.findByIdAndDelete(id).
//         then(
//             () => {
//                 res.status(422).json({ message: "Deleted" });
//             })
//         .catch(
//             (error) => {
//                 res.status(400).json({ error: error });
//             }
//         )
// });

// router.post('/addplace', async (req, res) => {

//     const { CId, name, image, details, location, latitude, longitude } = req.body;

//     if (!CId || !name || !image || !details || !location || !latitude || !longitude || image == null) {
//         return res.status(500).json({ error: "All fields are required" });
//     }
//     else {
//         const place = new Place({ CId, name, image, details, location, latitude, longitude });
//         place.save();
//         res.status(422).json({ message: "Place Information Added Successfully" });
//     }

// });

// router.post('/displayplace', async (req, res) => {
//     const placename = await Place.find();
//     res.json(placename);
// });



// router.post('/viewplace', async (req, res) => {
//     const { id } = req.body;
//     const place = await Place.findById(id);
//     res.json(place);
// });

// router.post('/editplace', async (req, res) => {
//     const id = req.body.id;
//     const CId = req.body.CId;
//     const image = req.body.image;
//     const name = req.body.name;
//     const details = req.body.details;
//     const location = req.body.location;
//     const latitude = req.body.latitude;
//     const longitude = req.body.longitude;
//     Place.updateOne({ _id: id },
//         {
//             $set: {
//                 "CId": CId,
//                 "image": image,
//                 "name": name,
//                 "details": details,
//                 "location": location,
//                 "latitude": latitude,
//                 "longitude": longitude
//             }
//         }).then(
//             () => {
//                 res.status(422).json({ message: "Done" });
//             }
//         ).catch(
//             (error) => {
//                 res.status(400).json({ error: error });
//             }
//         )
// });

// router.post('/deleteplace', async (req, res) => {
//     const { id } = req.body;
//     Place.findByIdAndDelete(id).
//         then(
//             () => {
//                 res.status(422).json({ message: "Deleted" });
//             })
//         .catch(
//             (error) => {
//                 res.status(400).json({ error: error });
//             }
//         )
// });

// router.post('/addfood', async (req, res) => {

//     const { CId, PId, name, image, details } = req.body;
//     if (!CId || !PId || !name || !image || !details || image == " ") {
//         return res.status(500).json({ error: "All fields are required" });
//     }
//     else {
//         const food = new Food({ CId, PId, name, image, details });
//         food.save();
//         res.status(422).json({ message: "Food Information Added Successfully" });
//     }

// });

// router.post('/viewfood', async (req, res) => {
//     const pid = req.body.pid;
//     const food = await Food.find({ "PId": pid });
//     res.json(food);
// });

// router.post('/viewfoodcity', async (req, res) => {
//     const cid = req.body.cid;
//     const food = await Food.find({ "CId": cid });
//     res.json(food);
// });

// router.post('/viewsinglefood', async (req, res) => {
//     const id = req.body.id;
//     const food = await Food.findById(id);
//     res.json(food);
// });

// router.post('/editfood', async (req, res) => {
//     const id = req.body.id;
//     const CId = req.body.CId;
//     const PId = req.body.PId;
//     const image = req.body.image;
//     const name = req.body.name;
//     const details = req.body.details;
//     Food.updateOne({ _id: id },
//         {
//             $set: {
//                 "CId": CId,
//                 "PId": PId,
//                 "image": image,
//                 "name": name,
//                 "details": details,
//             }
//         }).then(
//             () => {
//                 res.status(422).json({ message: "Done" });
//             }
//         ).catch(
//             (error) => {
//                 res.status(400).json({ error: error });
//             }
//         )
// });

// router.post('/deletefood', async (req, res) => {
//     const { id } = req.body;
//     Food.findByIdAndDelete(id).
//         then(
//             () => {
//                 res.status(422).json({ message: "Deleted" });
//             })
//         .catch(
//             (error) => {
//                 res.status(400).json({ error: error });
//             }
//         )
// });

module.exports = router;