const express = require("express");

const app = express();

const router = express.Router()

const PORT=3000

app.get('/',(req,res)=>{
    res.send("Welcome to Camper Bot's homepage!")
})
app.get('/hobbies',(req,res)=>{
    res.send("I cycle, go boating, and play guitar.")
})
app.get('/skills',(req,res)=>{
    res.send("JavaScript, Node.js, and Express.js!")
})

// custom endpoints
router.get('/profile',(req,res)=>{
    res.json({
        "name":"Camper Bot",
        "hobbies":['cycling', 'boating', 'guitar'],
        "skills":['JavaScript', 'Node.js', 'Express.js']
    })
})

// middleware
app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`Server listening on PORT: ${PORT}`)
})