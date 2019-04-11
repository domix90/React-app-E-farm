const express = require('express');
const router = express.Router();

function getSth(req, res) {
	try {
		const number =  parseInt(req.params.number);
		const list = new Array();

	console.log(number);
		
		if (typeof number !== 'undefined' && !isNaN(number)) {
			for (let i=parseInt(number);i<(parseInt(number)+50);i++) {
				list.push(i);
			}
		} else {
			for (let i=0;i<50;i++) {
				list.push(i);
			}
		}
		
		res.json({
			list,
		});
	} catch(error) {
		res.status(500).json({
			message: "Internal server error",
		})
	}
}

router.get('/', getSth);
router.get('/:number', getSth);

router.post('/', (req, res) => {
	try {
		const list = req.body.list.filter(x => {
			return x % 2 === 0;
		});
		
		res.json({
			list,
		})
	} catch(error) {
		res.status(500).json({
			message: "Internal server error",
			error: error.toString(),
		})
	}
});

module.exports = router;