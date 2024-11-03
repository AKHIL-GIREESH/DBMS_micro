const {getOneMovie,getTheatres} = require("../controller/movieSpecific")
const router = require("express").Router();

router.route("/:movieId").get(getOneMovie)
router.route("/:movieId/theatres").get(getTheatres)

module.exports = router