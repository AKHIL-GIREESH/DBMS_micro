const pool = require("../db/connect")

const MgrSignUp = async (req,res) => {
    try{
        const {name,email,password,location} = req.body
        const result = await pool.query(`INSERT INTO public.theatre (name, location, email, password, created_at, updated_at) VALUES ('${name}', '${location}', '${email}', '${password}', NOW(), NOW()) RETURNING *`)
        const newRes = {id:result.rows[0].id,email:result.rows[0].email,name:result.rows[0].name}
        res.status(200).json(newRes);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const MgrLogin = async (req,res) => {
    try{
        const {email,password} = req.body
        const result = await pool.query(`SELECT id, name, location, email, password, created_at, updated_at FROM public.theatre  WHERE email = '${email}' AND password = '${password}'`)
        const newRes = {id:result.rows[0].id,email:result.rows[0].email,name:result.rows[0].name}
        res.status(200).json(newRes);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const ScreenAdd = async (req,res) => {
    try{
        const {name,nums} = req.body
        const {theatre} = req.params
        console.log(theatre)
        const result = await pool.query(`INSERT INTO public.Screen (screen_name, theatre_id, number_of_seats, created_at) VALUES ('${name}', ${theatre}, ${nums}, NOW()) RETURNING *`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const screenSelect = async (req,res) => {
    try{
        const {theatre} = req.params
        const result = await pool.query(`SELECT s.id AS screen_id, s.screen_name, s.number_of_seats, s.created_at  FROM public.screen s  WHERE s.theatre_id = ${theatre}`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const ScreenUpdate = async (req,res) => {
    try{
        const {theatre,id} = req.params
        const {name,nums} = req.body
        const result = await pool.query(`UPDATE public.screen SET screen_name='${name}', number_of_seats=${nums} WHERE id = ${id} AND theatre_id = '${theatre}' RETURNING *`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const ScreenDelete = async (req,res) => {
    try{
        //const {name,nums} = req.body
        const {theatre,id} = req.params
        const result = await pool.query(`DELETE FROM public.Screen WHERE id = ${id} AND theatre_id = ${theatre} RETURNING *`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

module.exports = {MgrSignUp,MgrLogin,ScreenAdd,screenSelect,ScreenDelete,ScreenUpdate}