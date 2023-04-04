const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
const router = require("./api/routes/route")
const path = require("path")
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/build")

app.use(express.static(buildPath))

app.get("/", (req, res)=> {
res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"))
})

app.use(express.static("../frontend1/public"))
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use("/", router)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DBCONNECT);



app.listen(8000,()=>{console.log("server listening on port 8000")})
