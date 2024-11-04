const {MgrLogin,MgrSignUp} = require("../controller/mgrUser");
const router = require("express").Router();

router.route("/login").post(MgrLogin)
router.route("/signup").post(MgrSignUp)


module.exports = router