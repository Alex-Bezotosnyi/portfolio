import React from "react";
import ProjectItem from "./modules/ProjectItem";

import Project1IMG from "../public/assets/projects/project-1.png";
import Project2IMG from "../public/assets/projects/project-2.png";
import Project3IMG from "../public/assets/projects/project-3.png";

const Projects = () => {
	return (
		<div id="projects" className="w-full p-2">
			<div className="max-w-[1240px] mx-4 px-2 py-16 lg:mx-auto flex flex-col h-full">
				<p className="uppercase text-xl tracking-widest py-2 px-4 text-gray-800 border-4 border-blue-600 w-fit max-w-fit rounded-lg dark:text-gray-100">
					Projects
				</p>
				<h2 className="py-4 mx-4">What I've built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Users & Tweets"
						backgroundImg={Project1IMG}
						projectURL="/project1"
					/>
					<ProjectItem
						title="Start Wars API"
						backgroundImg={Project2IMG}
						projectURL="/project2"
					/>
					<ProjectItem
						title="Portfolio"
						backgroundImg={Project3IMG}
						projectURL="/project3"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
