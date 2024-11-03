const pool = require("../db/connect")

const SignUp = async (req,res) => {
    try{
        const {username,email,password} = req.body
        const result = await pool.query(`INSERT INTO public."user" (username, email, password, created_at, updated_at) VALUES ('${username}', '${email}', '${password}', NOW(), NOW()) RETURNING *`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

const Login = async (req,res) => {
    try{
        const {email,password} = req.body
        const result = await pool.query(`SELECT id, username, email, created_at, updated_at FROM public."user" WHERE email = '${email}' AND password = '${password}'`)
        res.status(200).json(result.rows);
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
    }
}

module.exports = {SignUp,Login}