const {Login,SignUp} = require("../controller/Users")
const router = require("express").Router();

router.route("/login").post(Login)
router.route("/signup").post(SignUp)

module.exports = router