import React from 'react';
import ProjectItem from "./ProjectItem";
import ProjectIMG from "../public/assets/projects/project-1.png"

const Projects = () => {
    return (
        <div id="projects"
             className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">
                    What I've built
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title="Property Finder"
                                 backgroundImg={ProjectIMG}
                                 projectURL="/property"
                    />
                    <ProjectItem title="Property Finder"
                                 backgroundImg={ProjectIMG}
                                 projectURL="/property"
                    />
                    <ProjectItem title="Property Finder"
                                 backgroundImg={ProjectIMG}
                                 projectURL="/property"
                    />
                    <ProjectItem title="Property Finder"
                                 backgroundImg={ProjectIMG}
                                 projectURL="/property"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;