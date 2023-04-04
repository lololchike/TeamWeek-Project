require('dotenv').config();
const express = require("express")
const app = express()
const mongoose = require('mongoose')
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
mongoose.connect("mongodb+srv://Bill:procedure1@nodeprojects.mtiiga4.mongodb.net/University?retryWrites=true&w=majority");


app.listen(5022,()=>{console.log("server listening on port 8000")})
