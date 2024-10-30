const getAllMovies = require("../controller/movie");
const router = require("express").Router();

router.route("/").get(getAllMovies)

module.exports = router