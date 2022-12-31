import Image from "next/image";
import React from 'react';
import ProgrammerIMG from "../public/assets/main/photo.jpg";

const About = () => {
    return (
        <div id="about"
             className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        About
                    </p>
                    <h2 className="py-4">
                        Who I Am
                    </h2>
                    <p className="py-2 text-gray-600">
                        Hello, recruiter! I’m Alex and I’m Frontend Developer.
                    </p>
                    <p className="py-2 text-gray-600">
                        Owning such technologies as HTML/SCSS, JavaScript, TypeScript, React, Redux/Redux Toolkit, Node.js, Express.js, etc., believe that I can be very useful in the development of your company. In the sane time, you can check out some of my latest projects by clicking on the link below.
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        Check out some of my latest projects
                    </p>
                </div>
                <div
                    className="relative w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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