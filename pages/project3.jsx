import Link from "next/link";
import React from "react";

import { RiRadioButtonFill } from "react-icons/ri";
import property3IMG from "../public/assets/projects/project-3.png";

const project2 = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[60vh] relative">
				<div className="absolute top-0 left-0 w-full h-[60vh] bg-black/70 z-10" />
				<img
					className="absolute z-1 object-cover h-full w-full inset-0"
					src={property3IMG.src}
					alt="APIProject"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Portfolio</h2>
					<h3>Next.js | Tailwind | SendGrid</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<h3 className="py-2">Overview</h3>
					<p>
						This project is 2in1 for me: firstly, the practical
						improvement of skills in working with Next.js and
						SendGrid, as well as the creation of my own portfolio.
						The project is built using Next.js, Tailwind, SendGrid.
					</p>
					<a
						href="https://github.com/Alex-Bezotosnyi/portfolio"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a href="/" target="_blank" rel="noreferrer">
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-gray-600 shadow-md">
					<div className="p-4">
						<p className="text-center font-bold pb-2">
							Technologies
						</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 px-4 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Next.js
							</p>
							<p className="text-gray-600 py-2 px-4 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Tailwind
							</p>
							<p className="text-gray-600 py-2 px-4 flex items-center">
								<RiRadioButtonFill className="pr-1" /> SendGrid
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default project2;
