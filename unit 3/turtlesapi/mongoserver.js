///////////////////////////////
// Dependencies
///////////////////////////////
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

////////////////////////////////
// Database Connection
///////////////////////////////
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {useNewUrlParser: true, useUnifiedTopology: true}

// connect
mongoose.connect(DATABASE_URL, CONFIG)

// connection events
mongoose.connection
.on("open", () => {console.log("Connected to Mongo")})
.on("close", () => {console.log("disconnected from Mongo")})
.on("error", (error) => {console.log(error)})

////////////////////////////////
// Our Turtle Model
////////////////////////////////
// Turtle Schema
const turtleSchema = new mongoose.Schema({
    name: String,
    role: String
}, {timestamps: true})

// model
const Turtle = mongoose.model("Turtle", turtleSchema)

////////////////////////////////
// Application Object
////////////////////////////////
const app = express()

/////////////////////////
// MIDDLEWARE
/////////////////////////

app.use(express.json())

/////////////////////////
// The Data
/////////////////////////
const turtles = [
    {name: "Leonardo", role: "ninja"},
    {name: "Michaelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"},
]

////////////////////////////////
// Routes
////////////////////////////////

// home route to test server
app.get("/", (req, res) => {
    res.json({
        response: "Hello World"
    })
})
// Seed Route - adding some starter data to our database
app.get("/turtles/seed", async (req, res) => {
    await Turtle.deleteMany({}) // deleting the turtles
    const newTurtles = await Turtle.create(turtles) // seeding turtles
    res.json(newTurtles) // return new turtles as json
})

// Index Route - return all the turtles
// get request to /turtles
app.get("/turtles", async (req, res) => {
    // send the turtles
    res.json(await Turtle.find({}))
})

// Show Route - return a single turtle
// get request to /turtles/:id
app.get("/turtles/:id", async (req, res) => {
    // get the id
    const id = req.params.id
    // get the turtle from database
    const turtle = await Turtle.findById(id)
    // return the turtle
    res.json(turtle)
})

// Create Route - create a new turtle from the request body
// post request to /turtles
app.post("/turtles", async (req, res) => {
    // push the new turtle into the array
    const newTurtle = await Turtle.create(req.body)
    // return the new turtle
    res.json(newTurtle)
})

// Update Route - update a turtle
// put request to /turtles/:id
app.put("/turtles/:id", async (req, res) => {
    // get the id from params
    const id = req.params.id
    // update the turtle
    const updatedTurtle = await Turtle.findByIdAndUpdate(id, req.body, {new: true})
    // return the turtle
    res.json(updatedTurtle)
})

// Delete Route - delete a turtle
// delete request to /turtles/:id
app.delete("/turtles/:id", async (req, res) => {
    //get the id from params
    const id = req.params.id
    // remove turtle from database
    const deletedTurtle = await Turtle.findByIdAndRemove(id)
    // return the deletedTurtle
    res.json(deletedTurtle)
})
/////////////////////////////////
// Server listener
/////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))