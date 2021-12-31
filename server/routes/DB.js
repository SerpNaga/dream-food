const connectDB = function(){
    const MongoClient = require("mongodb").mongoClient
    const userName = process.env.userName || "user"
    const userPass = process.env.userPass || "ala123456"
    const uri = `mongodb+srv://${userName}:${userPass}@cluster0.ljoek.mongodb.net/food?retryWrites=true&w=majority`
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB