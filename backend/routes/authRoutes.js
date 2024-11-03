const {Login,SignUp} = require("../controller/Users")
const router = require("express").Router();

router.route("/login").get(Login)
router.route("/signup").post(SignUp)

module.exports = router