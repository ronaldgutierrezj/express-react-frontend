///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const express = require("express")
const Fruit = require("../models/fruit")

///////////////////////////////////////
// create router
///////////////////////////////////////
const router = express.Router()

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use((req, res, next) => {
    if (req.session.loggedIn){
        next()
    } else {
        res.redirect("/user/login")
    }
})
///////////////////////////////////////
// routes
///////////////////////////////////////

router.get("/seed", (req, res) => {
    // array of starter fruits
  const startFruits = [
    { name: "Orange", color: "orange", readyToEat: false },
    { name: "Grape", color: "purple", readyToEat: false },
    { name: "Banana", color: "orange", readyToEat: false },
    { name: "Strawberry", color: "red", readyToEat: false },
    { name: "Coconut", color: "brown", readyToEat: false },
  ]

  // Delete All Fruits
  Fruit.deleteMany({}, (err, data) => {
      // seed starter fruits
      Fruit.create(startFruits, (err, data) => {
          // sending the new fruits as a response
          res.json(data)
      })
  })
})

// Index Route (Get => /fruits)
router.get("/", (req, res) => {
    Fruit.find({username: req.session.username}, (err, fruits) => {
        res.render("fruits/index.ejs", {fruits})
    })
})

// New Route (Get => /fruits/new)
router.get("/new", (req, res) => {
    res.render("fruits/new.ejs")
})

router.post("/", (req, res) => {
    // convert ready to eat to true or false
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    // add the username to req.body
    req.body.username = req.session.username
    // create the new fruit
    Fruit.create(req.body, (err, fruit) => {
        //send the user back to index
        res.redirect("/fruits")
    })
})

// The Edit Route (Get => /fruits/:id/edit)
router.get("/:id/edit", (req, res) => {
    const id = req.params.id // get id from params
    // get fruit from database
    Fruit.findById(id,(err, fruit) => {
        //render a template
        res.render("fruits/edit.ejs", {fruit})
    })

})

// THe Update Route (PUT => /fruits/:id)
router.put("/:id", (req, res) =>{
    // get the id param
    const id = req.params.id
    // convert readyToEat to true or false
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    //update the fruit
    Fruit.findByIdAndUpdate(id, req.body, {new: true}, (err, fruit) => {
        //redirect back to main page
        res.redirect("/fruits")
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    Fruit.findByIdAndRemove(id, (err, fruit) => {
        res.redirect("/fruits")
    })
})

// THe Show (GET => /fruits/:id)
router.get("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id

    Fruit.findById(id, (err, fruit) => {
        //render the template
        res.render("fruits/show.ejs", {fruit})
    })
})

///////////////////////////////////////
// export the router
///////////////////////////////////////
module.exports = router