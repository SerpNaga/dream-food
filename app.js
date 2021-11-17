const express = require("express")
const port = process.env.PORT || 3002

const app = express()

app.get("/", (req, res)=>{
    res.send("<h1>Dream Food</h1>")
})

app.listen(port)