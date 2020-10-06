const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
	signup,
	login,
};

async function login(req, res) {
	console.log('hitting req > ', req, req.body.email, '<< req.body.email');
	try {
		const user = await User.findOne({
			email: req.body.email,
		});
		console.log('hitting try');
		if (!user)
			return res
				.status(400)
				.json({ err: 'bad credentials' });
		user.comparePassword(
			req.body.password,
			(err, isMatch) => {
				console.log('hitting isMatch');
				if (isMatch) {
					const token = createJWT(user);
					res.json({ token });
				} else {
					return res
						.status(400)
						.json({ err: 'bad credentials' });
				}
			}
		);
	} catch (err) {
		return res.status(400).json(err);
	}
}

async function signup(req, res) {
	console.log('hitting signup controller');
	const user = new User(req.body);
	try {
		await user.save();
		// TODO: Send back a JWT instead of the user
		const token = createJWT(user);
		res.json({ token });
	} catch (err) {
		// Probably a duplicate email
		res.status(400).json(err);
	}
}

// async function forgot(req, res) {
// 	console.log('hitting forgot controller');
// 	try {
// 	} catch (err) {}
// }

/*---  Helper Functions ---*/

function createJWT(user) {
	console.log('hitting createJWT');
	return jwt.sign(
		{ user }, // data payload
		SECRET,
		{ expiresIn: '24h' }
	);
}
