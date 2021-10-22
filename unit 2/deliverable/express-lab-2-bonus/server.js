const express = require('express');
const { is } = require('type-is');
const app = express();
const port = 3000;

/*==============    Bonus     =================
Have some more fun
Update your page to be something like:
    99 little bugs in the code
    99 little bugs
    Take on down
    Patch it around
    127 bugs in the code 
    
    */

// Ramdonly Im getting the numbers 1 or 2. If 1 was gotten means the number of bugs will decrease by 1 and if 2 was gotten the number of bugs will be increase by 2. 

app.get('/:bugs', (req,res)=>{
    let random = Math.floor(Math.random()*2)+1;   
    if (random === 1) {
        let index = parseInt(req.params.bugs) - 1 ;
        res.send(`
            <h2>${req.params.bugs} little bugs in the code</h2>
            <h2>${req.params.bugs} little bugs </h2>
            <h2>Take one down</h2>
            <h2>Patch it arounud</h2>
            <a href="http://localhost:3000/${index}">take one down, pach it around </a>`)}
        else {
            let index = parseInt(req.params.bugs) + 2;
            res.send(`
            <h2>${req.params.bugs} little bugs in the code</h2>
            <h2>${req.params.bugs} little bugs </h2>
            <h2>Take one down</h2>
            <h2>Patch it arounud</h2>
            <a href="http://localhost:3000/${index}">take one down, pach it around </a>`)
            }
})

/*   ===========     Hungry for more?    ==============

Fibonacci
Back in your main app:

    .Add Fibonnacias a comment in your application.
    .Create a route 'fibonacci'
    .This route will take one param, the number we will operate on.
    .If the number param is not a fibonacci number, print out "I can tell   this is not a fibonacci number."
    .If the number is a Fibonacci number print out "Very good. It is Fibonacci."
*/

// to know if a number belongs to the Fibonacci series at least one of this must be a perfect square : (5*number*number+4) (5*number*number-4)


app.get('/fibonacci/:number',(req,res)=>{

// function that returns true if x is perfect square
    const perfectSquuare = (x)=>{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
};

// function that returns true if n is a Fibinacci Number, else false
let n = parseInt(req.params.number)
function isFibonacci(n) {
return  perfectSquuare(5*n*n+4) ||
        perfectSquuare(5*n*n-4)
}

if(isFibonacci(n)){
    res.send("Very good. It is Fibonacci.")
} else {res.send("this is not")}
}
)
app.listen(port, ()=>{
    console.log("Express is listening on port 3000...")
  });

  