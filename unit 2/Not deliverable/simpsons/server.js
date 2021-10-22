const express   = require('express');
const app = express();

app.get('/homer',(req, res)=>{
res.send("auchhhhh")
})

app.get('/marge',(req, res)=>{
    res.send("kids time to go to school")
})

app.get('/bart',(req, res)=>{
    res.send("oh noooo!!!")
})

app.get('/lisa',(req, res)=>{
    res.send("yeahhhh")
})

app.get('/maggie',(req, res)=>{
    res.send("Im a baby")
})

app.get('/snowballII',(req, res)=>{
    res.send("miauuu")
})

app.get('/santa-little-helper',(req, res)=>{
    res.send("woof")
})

app.listen(3000,()=>{
    console.log("listening")
})