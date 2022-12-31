import React from 'react';
import HTML_IMG from "../public/assets/skills/html.png";
import MongoDB_IMG from "../public/assets/skills/mongodb.png";
import SassIMG from "../public/assets/skills/sass.png";
import TailwindIMG from "../public/assets/skills/tailwind.png";
import TypescriptIMG from "../public/assets/skills/typescript.png";
import ReactIMG from "../public/assets/skills/react.png";
import ReduxIMG from "../public/assets/skills/redux.png";
import JavascriptIMG from "../public/assets/skills/javascript.png";
import NextIMG from "../public/assets/skills/nextjs.png";
import NodeIMG from "../public/assets/skills/nodejs.png";
import ExpressIMG from "../public/assets/skills/expressjs.png";

const Skills = () => {
    return (
        <div id="skills"
             className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Skills
                </p>
                <h2 className="py-4">
                    What I Can Do
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 shadow-xl rounded-xl">
                        <div className="flex flex-col justify-around">
                            <div className="flex flex-col justify-center items-center pb-8 text-xl">
                                <h3>
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
                                            <h3>
                                                HTML
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                SASS
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                Tailwind
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                Typescript
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                React
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                Redux
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                Javascript
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                Next.js
                                            </h3>
                                            <p className="text-xs">
                                                Intermediate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl">
                        <div className="flex flex-col justify-around">
                            <div className="flex flex-col justify-center items-center pb-8 text-xl">
                                <h3>
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
                                            <h3>
                                                Node.js
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                Express.js
                                            </h3>
                                            <p className="text-xs">
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
                                            <h3>
                                                MongoDB
                                            </h3>
                                            <p className="text-xs">
                                                Intermediate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;