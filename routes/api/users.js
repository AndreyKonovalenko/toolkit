const express = require("express");
const router = express.Router();

// route: POST api/user/register
// desc: Register new user
// access Public

router.post('/',(req, res)=> {
  console.log(req.body);
  res.send("User route");
});

module.exports = router;