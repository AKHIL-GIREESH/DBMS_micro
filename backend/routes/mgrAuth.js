const {MgrLogin,MgrSignUp,screenSelect,ScreenAdd,ScreenDelete,ScreenUpdate} = require("../controller/mgrUser");
const router = require("express").Router();

router.route("/login").post(MgrLogin)
router.route("/signup").post(MgrSignUp)
router.route("/:theatre").get(screenSelect).post(ScreenAdd)
router.route("/:theatre/:id").patch(ScreenUpdate).delete(ScreenDelete)


module.exports = router