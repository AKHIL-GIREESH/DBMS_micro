const pool = require("../db/connect");

const getTopFourMovies = async (req,res) => {
    try{
        const result = await pool.query("SELECT m.img_url AS poster,m.name, COALESCE(AVG(r.rating), 0) AS rating FROM movie m LEFT JOIN rating r ON m.id = r.movie_id GROUP BY m.id ORDER BY rating DESC LIMIT 4;");
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const getOtherMovies = async (req,res) => {
    try{
        const result = await pool.query("SELECT m.img_url AS poster, m.name, COALESCE(AVG(r.rating), 0) AS rating FROM movie m LEFT JOIN rating r ON m.id = r.movie_id WHERE m.id NOT IN (SELECT id FROM movie  ORDER BY rating DESC LIMIT 4) GROUP BY m.id ORDER BY m.name")
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e)
        res.status(500).send('Server Error');
    }
}

const getMovieByName = async (req,res) => {
    try{
        const {movie} = req.params
        const result  = await pool.query(`SELECT m.img_url AS poster, m.name, COALESCE(AVG(r.rating), 0) AS rating FROM movie m LEFT JOIN rating r ON m.id = r.movie_id WHERE m.name ILIKE '${movie}%' GROUP BY m.id ORDER BY m.name`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

module.exports = {getTopFourMovies,getOtherMovies,getMovieByName}