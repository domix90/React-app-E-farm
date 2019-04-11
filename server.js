const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authMiddleware = require('./authMiddleware');
const objectRouter = require('./backend/routes/objectRouter');
const personRouter = require('./backend/routes/personRouter');

const app = express();

// PORT FOR LOCAL DEV
const PORT = 7778;

app.use(cors());
// Bodyparser Middleware
app.use(bodyParser.json());
app.use(express.json());


// Configuration
// ==============================================================================

// Connect to Mongoose LOCALLY
//mongoose.connect('mongodb://localhost:27017/dominik', {useNewUrlParser: true});

// Cloud DB Config 
const db = require('./config/keys').mongoURI;
//Connect to Mongoose CLOUD AWS 
mongoose
.connect(db,{useNewUrlParser: true})
.then (() => console.log('Mongo db connnecteeed...'))
.catch(err => console.log(err));

// Port for Heroku Deployment 
//const port = process.env.PORT || 5000; 


app.get('/', authMiddleware, (request, result) => {
	res.status(200).json({
		message: " Udało się dostać do Hello world!",
	})
	
})


app.post('/', authMiddleware, (request, result) => {
	try {
		const body = request.body;
		
		console.log(body);
		
		return result.json({
			body,
		})
	} catch (error) {
		return result.status(400).json({
			error: 400,
			message: "Body missing",
		})
	}
})

app.use('/object', authMiddleware, objectRouter);
app.use('/person', authMiddleware, personRouter);

app.listen(PORT, () => {
	console.log(`From Dom App listening on port ${PORT}.`);
});