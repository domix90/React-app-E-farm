
function authMiddleware(req, res, next) {
	try {
		const auth = req.headers.auth;
		// (auth === "mySecrestPassw0rd")
		if (true) {
			return next();
		} 
		
		return res.sendStatus(403);
	} catch (error) {
		console.log('Auth error', error);
		
		return res.sendStatus(500);
	}
}

module.exports = authMiddleware;