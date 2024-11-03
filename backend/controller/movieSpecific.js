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
        const result  = await pool.query(`SELECT t.id AS theatre_id, t.name AS theatre_name, t.location, s.id AS screen_id, s.screen_name, sl.slot_time, sl.id AS slot_id FROM public.theatre t JOIN public.screen s ON s.theatre_id = t.id JOIN public.slot sl ON sl.screen_id = s.id WHERE t.location = '${location}' AND sl.movie_id = ${movieId} AND sl.start_date <= '${date}' AND (sl.end_date IS NULL OR sl.end_date >= '${date}');`)
        const inter = result.rows
        console.log(inter.length)
        
        let obj = {}
        
        for(let i=0;i<inter.length;i++){
            if(obj[inter[i].theatre_id]){
                obj[inter[i].theatre_id].push([inter[i].slot_id,inter[i].slot_time])
            }else{
                obj[inter[i].theatre_id] = [inter[i].screen_id,inter[i].theatre_name,[inter[i].slot_id,inter[i].slot_time]]
            }
        }

        console.log(obj)

        res.status(200).json(obj);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const getReviewByMovie = async(req,res) => {
    try{
        const {movieId} = req.params
        const result  = await pool.query(`SELECT R.review, S.rating, U.username FROM public.Review R JOIN public.Rating S ON R.movie_id = S.movie_id AND R.user_id = S.user_id JOIN public."user" U ON U.id = R.user_id WHERE U.id = ${movieId}`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const getDataBySlot = async(req,res) => {
    try{
        const {slot} = req.params
        const result  = await pool.query(`SELECT m.name AS movie_name, t.name AS theatre_name, s.slot_time, s.start_date, s.end_date, sc.number_of_seats AS total_number_of_seats, s.number_of_seats AS available_seats FROM public.slot s JOIN public.movie m ON s.movie_id = m.id JOIN public.screen sc ON s.screen_id = sc.id JOIN public.theatre t ON sc.theatre_id = t.id WHERE s.id=${slot}`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

module.exports = {getOneMovie, getTheatres,getReviewByMovie,getDataBySlot}