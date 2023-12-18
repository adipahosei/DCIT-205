const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log(`Node is running`)
})

app.get('/',(req, res)=>{
    res.send("Hello Node")
})