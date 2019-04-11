const express = require('express');
const router = express.Router();
// Person Model 
const Person = require('../../personModel');

async function getOne(req, res) {
	try {
		const person = await Person.findOne({_id: req.params.id}).lean();
	
		if (person) {
			return res.json(person);
		}
	
		res.status(404).json({
			message: "Person not found",
		})
	} catch(error) {
		res.status(500).json({
			message: "Internal server error",
			error: error.toString(),
		})
	}
	
}
async function getAll(req, res) {
	const list = await Person.find({}).lean();
	
	res.json({list});
}

router.get('/', getAll);

router.get('/:id', getOne);


router.post('/', async (req, res) => {
	try {
		const person = new Person({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			age: parseInt(req.body.age),
			vip: req.body.vip === "true",
		});
		
		const result = await person.save();
		
		res.send(result);
	} catch(error) {
		res.status(500).json({
			message: "Internal server error",
			error: error.toString(),
		})
	}
});

module.exports = router;



// Problem : I need a simple way to look at a user's profile from the mongoDB
// Solution: Use node.js to perform the profile lookup and server out template via React/antd

// 1. Create a webserver with a database connection - that is done
// 2. Handle HTTP route GET / and POST / i.e Home/root
  //  if the url == "/" && GET
    //show search 
  // if the url == "/" && POST 
    //create a new user in the DB
 
// 3. Haddle HTTP route GET /:username i.e /chalerks 
  // if url == "/...."
    //get json from mongDB
      //on error -> show the error 

// 4. Function that handles the reading of files and merge in value 