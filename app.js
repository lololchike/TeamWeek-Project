const express = require("express")
const app = express()

//app.get("/",(req,res)=>{res.send("You are Here!")})
app.use(express.static("./public"))


app.listen(8000,()=>{console.log("server listening on port 8000")})
