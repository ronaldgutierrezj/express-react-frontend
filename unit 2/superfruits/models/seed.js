////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const mongoose = require("./connection");
const Fruit = require("./fruit");

////////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

mongoose.connection.on("open", () => {
  // Run database queries in this function

  // create array of starter
  const startFruits = [
    { name: "Orange", color: "orange", readyToEat: false },
    { name: "Grape", color: "purple", readyToEat: false },
    { name: "Banana", color: "orange", readyToEat: false },
    { name: "Strawberry", color: "red", readyToEat: false },
    { name: "Coconut", color: "brown", readyToEat: false },
  ];

  // Delete all fruits
  Fruit.deleteMany({}, (err, data) => {
      //seed starter fruits
      Fruit.create(startFruits, (err, data) => {
        console.log("-------FRUITS CREATED---------")
        console.log(data)
        console.log("-------FRUITS CREATED---------")

        mongoose.connection.close()
      })
  })
});
