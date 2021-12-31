const express = require("express")
const port = process.env.PORT || 3002
const serverRouter = require("./server/routes/mainRouter")
const dbRouter = require("./server/routes/dbRouter")
const stylus = require("stylus")

const app = express()
app.use(express.json())

app.use(stylus.middleware({
    src: "./public/styles",
    dest: "./public"
}))

app.set("views", "./server/views")
app.set("view engine", "pug")

app.use(express.static("./public"))

app.use("/", serverRouter)
app.use("/api", dbRouter)

app.listen(port)