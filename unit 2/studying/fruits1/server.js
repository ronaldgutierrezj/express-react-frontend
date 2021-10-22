const express = require('express');
const { appendFile } = require('fs');
const app = express()

const fruits = [
{
    name:'apple',
    color: 'red',
    readyToEat: true
},
{
    name:'pear',
    color: 'green',
    readyToEat: false
},
{
    name:'banana',
    color: 'yellow',
    readyToEat: true
}
];

app.get('/fruits', (req,res)=>{
    res.send(fruits);
});

app.get('/fruits/:id', (req,res)=>{
    res.send(fruits[req.params.id]);
})

app.listen(3000, ()=>{
    console.log("im listening")
})
