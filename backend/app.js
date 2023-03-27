const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
const router = require("./routes/route")
//app.get("/",(req,res)=>{res.send("You are Here!")})
app.use(express.static("../frontend1/public"))
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use("/", router)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DBCONNECT);



app.listen(8000,()=>{console.log("server listening on port 8000")})
