const express = require("express")
const authorRouthes = require("./routes/author")

const app = express()
const port = 3006
app.set("port",port)

app.use("/api",authorRouthes)

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.listen(port,()=>{
    console.log(`Intro app escuchando el puerto ${port}`)
})