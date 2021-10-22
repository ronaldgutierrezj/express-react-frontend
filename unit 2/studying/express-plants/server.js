const express = require('express');
const app = express();
const port= 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];


app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
    console.log('=========================================');
    console.log('This is the entire Request Object sent from the browser to the server: ');
    console.log(req);
    console.log('========================================');
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});
  
app.get('/:indexOfPlantsArray',(req,res)=>{
    res.send(plants[req.params.indexOfPlantsArray]);
});




app.listen(port,()=>{
    console.log(`${port} port is listening`);
})