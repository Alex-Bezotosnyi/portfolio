import React from 'react';
import Link from "next/link";

import ProjectIMG from "../../public/assets/projects/project-1.png";

const ProjectItem = ( {title, backgroundImg, projectURL} ) => {
    return (
        <div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] dark:shadow-gray-600 shadow-md">
                <img className="rounded-xl group-hover:opacity-10"
                       src={backgroundImg.src}
                       alt="Project"/>
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="text-2xl text-white tracking-wider text-center mb-4">
                        {title}
                    </h3>
                    <Link href={projectURL}>
                        <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer dark:text-gray-600">
                            More Info
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;