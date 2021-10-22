// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              MIDDLEWARE
// =======================================

app.use(express.urlencoded({ extended:false }));

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('bakedgoods_index.ejs', {allBiscoff: bakedGoods} );
});

// NEW ROUTE - Renders form to Create Fruit
app.get("/bakedgoods/new", (req, res) => {
  res.render("new.ejs")
})
// Create Route - makes a new biscoff
app.post("/bakedgoods", (req,res)=>{
  bakedGoods.push(req.body)
  res.redirect('/bakedgoods')
})

// show route
app.get('/bakedgoods/:id', (req, res) => {
  res.render("bakedgoods_show.ejs", {baked: bakedGoods[req.params.id]});
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
