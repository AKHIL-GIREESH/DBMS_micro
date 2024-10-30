const pool = require("../db/connect");

const getAllMovies = async (req,res) => {
    try{
        const result = await pool.query('SELECT * FROM movie');  // replace 'users' with your table name
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

module.exports = getAllMovies