const express = require("express") ; 
const app = express() ; 

app.get("/test" , (req,res) => {
    res.send("test ok")
})


app.listen(4000 , () => console.log("Everything perfect")) ;