const { populate } = require("dotenv");
const pool = require("../db/connect");

const getOneMovie = async (req,res) => {
    try{
        const {movieId} = req.params
        const result  = await pool.query(`SELECT m.name, COALESCE(AVG(r.rating), 0) AS rating, m.video_url AS trailer, m.description AS desc, m.img_url AS img FROM movie m LEFT JOIN rating r ON m.id = r.movie_id WHERE m.id = ${movieId} GROUP BY m.id`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const getTheatres = async (req,res) => {
    try{
        const {movieId} = req.params
        const {location,date} = req.body
        const result  = await pool.query(`SELECT t.id AS theatre_id, t.name AS theatre_name, t.location, s.screen_name, sl.date, sl.slot_time, m.name AS movie_name FROM theatre t JOIN screen s ON t.id = s.theatre_id JOIN slot sl ON s.id = sl.screen_id JOIN movie m ON sl.movie_id = m.id WHERE t.location = '${location}' AND sl.date = '${date}' AND  m.id = ${movieId} ORDER BY t.name, sl.slot_time`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

module.exports = {getOneMovie, getTheatres}