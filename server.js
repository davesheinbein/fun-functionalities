var express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var app = express();
const cors = require('cors');

/*--- Spot for database ---*/

require('dotenv').config();
require('./config/database');

app.use(
	favicon(path.join(__dirname, 'build', 'favicon.ico'))
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*--- Spot for Routers ---*/
// User Auth
app.use(require('./config/auth'));

/*--- Spot for api routes ---*/

// Users
app.use('/api/users', require('./routes/api/users'));

// Emails
app.use('/api/form', cors());
app.post('/api/form', (req, res) => {
	const gmailLogin = process.env.GMAILLOGIN;
	console.log('gmailLogin', gmailLogin);
	const gmailPassword = process.env.GMAILPASSWORD;
	console.log('gmailPassword', gmailPassword);

	var name = req.body.name;
	console.log('name', name);
	var email = req.body.email;
	console.log('email', email);
	var subject = req.body.subject;
	console.log('subject', subject);
	var message = req.body.message;
	console.log('message', message);

	// https://ethereal.email/  used to set up a fake email for testing purposes
	// https://stackoverflow.com/questions/26196467/sending-email-via-node-js-using-nodemailer-is-not-working
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: gmailLogin,
			pass: gmailPassword,
		},
	});

	let mailOptions = {
		to: gmailLogin,
		replyTo: `${email}`,
		subject: `${subject}`,
		text:
			'Name: ' +
			name +
			'\nSubject: ' +
			subject +
			'\nEmail: ' +
			email +
			'\nMessage: ' +
			message,
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			console.log(err);
			res.json({
				msg: 'fail',
			});
		} else {
			res.json({
				msg: 'success',
			});
		}
	});
});
/*--- Spot for catch all route ---*/

// for a SPA's client-side routing to properly work
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`Express app listening on port ${port}`);
});
