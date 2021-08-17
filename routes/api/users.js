const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");

const User = require('../../models/User');

//@desc Test users route
//@rote GET api/users/test
//@access Public

router.get('/test', (req, res) => res.json({ msg: 'User route works' }));

//@desc Register new user
//@route POST api/users
//@acces Public

router.post(
  '/',
  check('name', 'Name is required!').not().isEmpty(),
  check('email', 'Please include a valid email!').isEmail(),
  // password must be at least 5 chars log
  check('password', 'Please enter a password with 5 or more characters!').isLength({min: 5}),
  async (req, res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json({erros: errors.array()});
    }

    const {name, email, password} = req.body;

    try {

    // See if user exists

    // Get user gravatar

    // Encrypt password

    // Return jsonwebtoken

    } catch (err) {

    }

    console.log(req.body);
    res.send("User route");
});





module.exports = router;