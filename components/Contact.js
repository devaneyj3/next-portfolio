import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import classes from "./contact.module.scss";

export default function Contact() {
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("Submit");

	const change = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const submit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		let response = await fetch("http://localhost:3000/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(data),
		});
		setStatus("Submit");
		let result = await response.json();
		console.log(result);
	};
	return (
		<div className={classes.container}>
			<h2>Contact Me</h2>
			<Form className={classes.form} onSubmit={submit}>
				<FormGroup>
					<Label for="name">Name</Label>
					<Input
						type="text"
						name="name"
						id="name"
						onChange={change}
						value={data.name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input
						type="email"
						name="email"
						id="email"
						onChange={change}
						value={data.email}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="message">Message</Label>
					<Input
						type="textarea"
						name="message"
						onChange={change}
						value={data.message}
						id="message"
					/>
				</FormGroup>
				<Button>{status}</Button>
			</Form>
		</div>
	);
}
