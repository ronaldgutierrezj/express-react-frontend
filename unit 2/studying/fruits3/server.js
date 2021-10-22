const express = require('express');
const app = express();
const fruits = require('./models/fruits');

// MIDDLEWARE
app.use(express.urlencoded({extended: false}));

// INDEX ROUTE - GET ALL FRUITS

app.get('/fruits', (req,res)=>{
    res.render('index.ejs', {allFruits: fruits});
});

// NEW ROUTE - RENDERS FORM TO CREATE FRUIT

app.get("/fruits/new", (req,res)=>{
    res.render('new.ejs');
});

app.post("/fruits",(req,res)=>{
    if(req.body.readyToEat ==="on"){
        req.body.readyToEat = true
    } else{req.body.readyToEat = false}
    fruits.push(req.body)
    res.redirect("/fruits")
})
// SHOW ROUTE - GETS ONE FRUIT
app.get('/fruits/:id', (req,res)=>{
    res.render('show.ejs', {fruit: fruits[req.params.id]});
});



app.listen(3000, ()=>{
    console.log("im listening")
})
