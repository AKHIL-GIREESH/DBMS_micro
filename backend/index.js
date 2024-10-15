const express = require("express");
const app = express();

app.get("/",(req,res) => res.status(200).send("Home");

app.listen(3001,() => console.log("Server is up and running");
