const express = require('express');
const app = express();
const fruits = require('./models/fruits');

app.get('/fruits', (req,res)=>{
    res.render('index.ejs', {allFruits: fruits});
});

app.get('/fruits/:id', (req,res)=>{
    res.render('show.ejs', {fruit: fruits[req.params.id]});
})

app.listen(3000, ()=>{
    console.log("im listening")
})
