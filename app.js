const express = require("express")
const port = process.env.PORT || 3002
const serverRouter = require("./server/routes/mainRouter")
const stylus = require("stylus")

const app = express()

app.use(stylus.middleware({
    src: "./public",
    dest: "./public"
}))


app.set("views", "./server/views")
app.set("view engine", "pug")

app.use(express.static("./public"))

app.use("/", serverRouter)

app.listen(port)