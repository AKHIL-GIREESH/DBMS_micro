const {getTopFourMovies,getOtherMovies,getMovieByName} = require("../controller/movie");
const router = require("express").Router();

router.route("/t4").get(getTopFourMovies)
router.route('/others').get(getOtherMovies)
router.route('/search/:movie').get(getMovieByName)

module.exports = router