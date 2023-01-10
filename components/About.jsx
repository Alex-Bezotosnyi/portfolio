import React from "react";

import ProgrammerIMG from "../public/assets/main/photo.jpg";

const About = () => {
	return (
		<div
			id="about"
			className="w-full md:h-screen p-2 flex items-center py-16"
		>
			<div className="max-w-[1240px] mx-4 py-16 lg:mx-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest py-2 px-4 text-gray-800 border-4 border-blue-600 w-fit max-w-fit rounded-lg dark:text-gray-100">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
						Hello! I’m Alex and I’m Frontend Developer.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						Owning such technologies as HTML/SCSS, JavaScript,
						TypeScript, React, Redux/Redux Toolkit, Next.js,
						Node.js, Express.js, etc., believe that I can be very
						useful in the development of your company.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						In my free time I go trekking and hiking - I love this
						pastime. At times I go in for mountaineering and rock
						climbing, but rarely.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						You can check out my Resume by clicking the link below.
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer no-underline">
						<a
							href="/files/Bezotosnyi_Juniordev_reactfrontend.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="group border-2 border-blue-500 font-bold py-2 px-4 rounded inline-flex items-center text-blue-500 hover:bg-blue-500 hover:text-gray-100 focus:transition-all duration-200">
								<svg
									className="text-blue-500 fill-current w-4 h-4 mr-2 group-hover:text-gray-100 group-focus:transition-all duration-200"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
								</svg>
								Download
							</button>
						</a>
					</p>
				</div>
				<div className="relative w-[90%] h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<img
						className="rounded-full text-sm"
						src={ProgrammerIMG.src}
						alt="Programmer"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
