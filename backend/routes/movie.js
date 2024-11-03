const {getOneMovie,getTheatres,getReviewByMovie,getDataBySlot} = require("../controller/movieSpecific")
const router = require("express").Router();

router.route("/:movieId").get(getOneMovie)
router.route("/:movieId/theatres").post(getTheatres)
router.route("/:movieId/review").get(getReviewByMovie)
router.route("/slot/:slot").get(getDataBySlot)


module.exports = router