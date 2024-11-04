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
        const {name,nums,tid} = req.body
        const result = await pool.query(`INSERT INTO public.Screen (screen_name, theatre_id, number_of_seats, created_at) VALUES ('${name}', ${tid}, ${nums}, NOW())`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

module.exports = {MgrSignUp,MgrLogin,ScreenAdd}