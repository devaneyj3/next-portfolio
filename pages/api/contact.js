const nodemailer = require("nodemailer");
export default function handler(req, res) {
	const contactEmail = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	contactEmail.verify((error) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Ready to Send");
		}
	});

	const { email, name, message } = req.body;
	const mail = {
		from: email,
		to: process.env.EMAIL,
		subject: "Contact Form Submission",
		html: `<p>${message}</p>
					<p>Sincelery, ${name}</p>
					<p>You can email me back at ${email}</p>`,
	};
	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json({ status: "ERROR" });
		} else {
			res.json({ status: "Message Sent" });
		}
	});
	res.status(200).json({ email: email, name: name, message: message });
}
