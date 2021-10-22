// import the connected mongoose object
const mongoose = require("./connection")


/////////////////////////////////////////
// Our Model
/////////////////////////////////////////
const {Schema, model} = mongoose

const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String
})

const Fruit = model("Fruit", fruitSchema)

//export the model
module.exports = Fruit