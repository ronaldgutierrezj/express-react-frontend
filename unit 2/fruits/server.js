// we import the express library
const express = require('express');
const app = express();

// import my fruit data
const fruits = require("./models/fruits");

// import method override
const methodOverride = require('method-override');

// middleware

app.use(express.urlencoded({ extended:false }));

// serve files statically from the public folder
app.use(express.static("public"))

// register the method-override middleware
app.use(methodOverride('_method'))

// routes

// index route - get all fruit
app.get('/fruits/', (req, res) => {
    res.render('index.ejs',{allFruits: fruits, title:"Fruits -Index Page"});
});

// NEW ROUTE - Renders form to Create Fruit
app.get("/fruits/new", (req, res) => {
    res.render("new.ejs", {title: "Fruits - New Page"})
  })

// Create Route - makes a new fruit
app.post("/fruits", (req,res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
      } else {
        req.body.readyToEat = false
      }
      fruits.push(req.body)
      res.redirect("/fruits")
})


// DESTROY ROUTE  - deletes a particular fruit

app.delete("/fruits/:indexOfFruitsArray", (req, res) => {
  fruits.splice(req.params.indexOfFruitsArray,1);
  res.redirect("/fruits");
});

// EDIT route - give us a form to edit a particular todo

app.get("/fruits/:indexOfFruitsArray/edit", (req, res) => {
  res.render("edit.ejs", {
    fruit: fruits[req.params.indexOfFruitsArray],
    index: req.params.indexOfFruitsArray,
    title: "Fruits App - Edit Page"
  })
})

// UPDATE route - receive form data from edit and updates fruit
app.put("/fruits/:indexOfFruitsArray", (req, res) => {
  // process the readyToEat as true or false
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  //UPDATE THE FRUIT
  fruits[req.params.indexOfFruitsArray] = req.body
  // REDIRECT THEM BACK TO INDEX
  res.redirect("/fruits")

})




// show route - get one fruit

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render("show.ejs", {fruit: fruits[req.params.indexOfFruitsArray], title: "First - Show Page"});
});


// the server Listener
app.listen(3000, () => {
    console.log('listening');
});