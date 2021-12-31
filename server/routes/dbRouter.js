const router  = require("express").Router()
const db = require("./db.js")

router.post("/add", (req, res)=>{
    console.log(req.body) //Получить тело формы
    const client = db()
    client.connect(err=>{
        if (err){

        }else{
            const table = client.db("food")
            const col = table.collection("products")
            col.insertOne(req.body, err=>{
                if(err){
                    console.log(err)
                }else{
                    res.send({msg: "done"})
                }
                client.close()
            })
        }
    })
})

router.get("/vegetables", (req, res)=>{
    const client = db()
    client.connect(err=>{
        if (err){
            res.send({"msg":"Error connection"})
        }else{
            const db = client.db("food")
            const col = table.collection("products")
            col.find({"type":"Овощи"}).toArray((error, data)=>{
                if(error){
                    console.log(error)
                }
                console.log(data)
                res.send({"data":data})
                client.close()
            })
        }
    });
});

module.exports = router