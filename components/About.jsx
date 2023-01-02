import React from 'react';

import ProgrammerIMG from "../public/assets/main/photo.jpg";

const About = () => {
    return (
        <div id="about"
             className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] mx-4 lg:mx-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#5651e5]">
                        About
                    </p>
                    <h2 className="py-4">
                        Who I Am
                    </h2>
                    <p className="py-2 text-gray-600">
                        Hello! I’m Alex and I’m Frontend Developer.
                    </p>
                    <p className="py-2 text-gray-600">
                        Owning such technologies as HTML/SCSS, JavaScript, TypeScript, React, Redux/Redux Toolkit,
                        Next.js,
                        Node.js, Express.js, etc., believe that I can be very useful in the development of your company.
                    </p>
                    <p className="py-2 text-gray-600">
                        In my free time I go trekking and hiking - I love this pastime. At times I go in for
                        mountaineering and rock climbing, but rarely.
                    </p>
                    <p className="py-2 text-gray-600">
                        You can check out my Resume by clicking on the link below.
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        <a href="/files/Bezotosnyi_Juniordev_reactfrontend.pdf" target="_blank"
                           rel="noopener noreferrer">
                            <button className="p-2">Resume</button>
                        </a>
                    </p>
                </div>
                <div
                    className="relative w-[90%] h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-full text-sm"
                         src={ProgrammerIMG.src}
                         alt="Programmer"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;