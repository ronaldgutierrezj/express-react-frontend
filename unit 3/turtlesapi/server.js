///////////////////////////////
// Dependencies
///////////////////////////////
const express = require("express")


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

// Index Route - return all the turtles
// get request to /turtles
app.get("/turtles", (req, res) => {
    // send the turtles
    res.json(turtles)
}),

// Show Route - return a single turtle
// get request to /turtles/:id
app.get("/turtles/:id", (req, res) => {
    // get the id
    const id = req.params.id
    // return the turtle
    res.json(turtles[id])
})

// Create Route - create a new turtle from the request body
// post request to /turtles
app.post("/turtles", (req, res) => {
    // log the body
    console.log("Request Body: ", req.body )
    // push the new turtle into the array
    turtles.push(req.body)
    // return all the turtles
    res.json(turtles)
})

// Update Route - update a turtle
// put request to /turtles/:id
app.put("/turtles/:id", (req, res) => {
    // get the id from params
    const id = req.params.id
    // update the turtle
    turtles[id] = req.body
    // return the turtle
    res.json(turtles[id])
})

// Delete Route - delete a turtle
// delete request to /turtles/:id
app.delete("/turtles/:id", (req, res) => {
    //get the id from params
    const id = req.params.id
    // remote turtle from array
    turtles.splice(id, 1)
    // return the list of turtles
    res.json(turtles)
})
/////////////////////////////////
// Server listener
/////////////////////////////////
app.listen(1337, () => console.log("Listening on port 1337"))