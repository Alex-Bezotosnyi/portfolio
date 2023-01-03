import Link from "next/link";
import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const Main = () => {
	return (
		<div id="main" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full flex justify-center items-center p-2 mx-auto">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm
						<span className="text-blue-600"> Alex</span>
					</h1>
					<div className="flex justify-center">
						<h1 className="py-4 px-8 text-gray-800 border-4 border-blue-600 w-fit">
							FRONTEND DEVELOPER
						</h1>
					</div>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I'm Frontend Developer specializing in building and
						designing digital products.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
							href="mailto:alexbezaua@gmail.com"
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
	);
};

export default Main;
