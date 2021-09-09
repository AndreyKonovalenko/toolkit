const express = require("express");
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require("express-validator");
const jwt = require('jsonwebtoken');
const config = require('config');

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json({error: errors.array()});
    }

    const {name, email, password} = req.body;

    try {

      let user = await User.findOne({email}).exec();

      if (user) {
        res.status(400).json({error: [{msg: "User already exixsts"}]});
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: "mm"
      })

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {expiresIn: 360000},
        (err, token) =>{
          if(err) throw err;
          res.json({token});
        });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
});





module.exports = router;