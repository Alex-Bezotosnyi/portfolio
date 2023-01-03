import React from "react";

import ExpressIMG from "../public/assets/skills/expressjs.png";
import HTML_IMG from "../public/assets/skills/html.png";
import JavascriptIMG from "../public/assets/skills/javascript.png";
import MongoDB_IMG from "../public/assets/skills/mongodb.png";
import NextIMG from "../public/assets/skills/nextjs.png";
import NodeIMG from "../public/assets/skills/nodejs.png";
import ReactIMG from "../public/assets/skills/react.png";
import ReduxIMG from "../public/assets/skills/redux.png";
import SassIMG from "../public/assets/skills/sass.png";
import TailwindIMG from "../public/assets/skills/tailwind.png";
import TypescriptIMG from "../public/assets/skills/typescript.png";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-4 lg:mx-auto flex flex-col justify-center h-full">
				<p className="uppercase text-xl tracking-widest py-2 px-4 text-gray-800 border-4 border-blue-600 w-fit max-w-fit rounded-lg dark:text-gray-100">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid justify-items-center md:grid-cols-2 gap-8">
					<div className="w-[90%] p-6 bg-gray-100 shadow-xl shadow-gray-300 rounded-xl w-full dark:bg-gray-100 dark:shadow-gray-600 dark:shadow-md">
						<div className="flex flex-col justify-around">
							<div className="flex flex-col justify-center items-center pb-8 text-xl">
								<h3 className="bg-blue-600 px-2 py-1 rounded-lg text-gray-100">
									Frontend Developer
								</h3>
							</div>
							<div className="flex flex-col-2 justify-around">
								<div className="flex flex-col gap-4">
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={HTML_IMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												HTML
											</h3>
											<p className="text-xs dark:text-gray-600">
												Advanced
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={SassIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												SASS
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={TailwindIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												Tailwind
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={TypescriptIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												Typescript
											</h3>
											<p className="text-xs dark:text-gray-600">
												Beginner
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={ReactIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												React
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={ReduxIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												Redux
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={JavascriptIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												Javascript
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={NextIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												Next.js
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-[90%] p-6 bg-gray-100 shadow-lg shadow-gray-300 rounded-xl w-full dark:bg-gray-100 dark:shadow-gray-600 dark:shadow-md">
						<div className="flex flex-col justify-around">
							<div className="flex flex-col justify-center items-center pb-8 text-xl">
								<h3 className="bg-blue-600 px-2 py-1 rounded-lg text-gray-100">
									Backend Developer
								</h3>
							</div>
							<div className="flex flex-col-2 justify-around">
								<div className="flex flex-col gap-4">
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={NodeIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												Node.js
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={ExpressIMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												Express.js
											</h3>
											<p className="text-xs dark:text-gray-600">
												Beginner
											</p>
										</div>
									</div>
									<div className="flex flex-row gap-4 hover:scale-105 ease-in duration-300">
										<div>
											<img
												src={MongoDB_IMG.src}
												alt="/"
												width="24"
												height="24"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="dark:text-gray-800">
												MongoDB
											</h3>
											<p className="text-xs dark:text-gray-600">
												Intermediate
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-4"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
