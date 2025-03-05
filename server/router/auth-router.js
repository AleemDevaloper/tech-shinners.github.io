const express = require('express')
const router = express.Router();
const authcont = require("../controllers/auth-controllers")

// routers 

router.route("/").get(authcont.home);
router.route("/register").get(authcont.register);
module.exports = router;
