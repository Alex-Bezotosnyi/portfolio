import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactIMG from "../public/assets/main/contact.png";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [errors, setErrors] = useState({});

	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (name.length <= 0) {
			tempErrors["name"] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors["subject"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	const onSubmitForm = async e => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			const res = await fetch("/api/contact", {
				body: JSON.stringify({
					email: email,
					name: name,
					subject: subject,
					message: message
				}),
				headers: {
					"Content-Type": "application/json"
				},
				method: "POST"
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);

				setName("");
				setEmail("");
				setMessage("");
				setSubject("");
				return;
			}
			setName("");
			setEmail("");
			setMessage("");
			setSubject("");
		}
		console.log(name, email, subject, message);
	};

	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] mx-4 px-2 py-16 lg:mx-auto flex flex-col h-full">
				<p className="uppercase text-xl tracking-widest py-2 px-4 text-gray-800 border-4 border-blue-600 w-fit max-w-fit rounded-lg dark:text-gray-100">
					Contact
				</p>
				<h2 className="py-4 mx-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-4 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full h-full">
						<div className="lg:p-4 h-full flex flex-col justify-between">
							<div>
								<div>
									<img
										className="rounded-xl hover:scale-105 ease-in duration-300"
										src={ContactIMG.src}
										alt="Contact"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-3 lg:col-span-2 w-full h-full">
						<div className="my-2">
							<h2 className="py-4">Alex Bezotosnyi</h2>
							<div className="border-t border-gray-300 flex items-center justify-between my-2 pt-4 px-4">
								<Link
									href="https://www.linkedin.com/in/alex-bezotosnyi/"
									target="_blank"
								>
									<div className="rounded-full shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<FaLinkedinIn />
									</div>
								</Link>
								<Link
									href="https://t.me/AlexBezotosnyi"
									target="_blank"
								>
									<div className="rounded-full shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<FaTelegramPlane />
									</div>
								</Link>
								<Link
									href="https://github.com/Alex-Bezotosnyi/"
									target="_blank"
								>
									<div className="rounded-full shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<FaGithub />
									</div>
								</Link>
								<Link
									href="mailto:oleksandr.bezotosnyi@gmail.com"
									target="_blank"
								>
									<div className="rounded-full shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<AiOutlineMail />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-400 dark:shadow-gray-600">
							<HiOutlineChevronDoubleUp
								className="text-[#5651e5]"
								size={30}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
