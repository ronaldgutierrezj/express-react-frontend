const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
// Body parser middleware: it creates req.body
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");

const DATABASE_URL = "mongodb+srv://SEI:ronald123@sei.rjzoc.mongodb.net/tweeter-ringo?retryWrites=true&w=majority"

const db=mongoose.connection;


// Connect to the mongo database:
mongoose.connect(DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


const Tweet = require("./models/tweet.js")


// Routes / Controllers

// Index
app.get('/tweets', (req, res) => {
	Tweet.find({}, (error, foundTweets) => {
		res.send(foundTweets);
	});
});

// Delete
app.delete('/tweets/:id', (req, res) => {
	Tweet.findByIdAndDelete(req.params.id, (error, deletedTweet) => {
		res.send({ success: true });
	});
});


// Update
app.put('/tweets/:id', (req, res) => {
	Tweet.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(error, updatedTweet) => {
			res.send(updatedTweet);
		}
	);
});

// create
app.post('/tweets', (req, res) => {
	Tweet.create(req.body, (error, createdTweet) => {
		res.send(createdTweet);
	});
});

// Show
app.get('/tweets/:id', (req, res) => {
	Tweet.findById(req.params.id, (error, foundTweet) => {
		res.send(foundTweet);
	});
});

app.listen(PORT, () => {console.log(`Express is listening on port ${PORT}`)});