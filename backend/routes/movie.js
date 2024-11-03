const {getOneMovie,getTheatres,getReviewByMovie} = require("../controller/movieSpecific")
const router = require("express").Router();

router.route("/:movieId").get(getOneMovie)
router.route("/:movieId/theatres").get(getTheatres)
router.route("/:movieId/review").get(getReviewByMovie)

module.exports = router