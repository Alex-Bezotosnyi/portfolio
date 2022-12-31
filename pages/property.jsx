import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import {RiRadioButtonFill} from 'react-icons/ri';
import propertyIMG from '../public/assets/projects/project-1.png';

const property = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[60vh] relative">
                <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/70 z-10"/>
                <img
                    className="absolute z-1 object-cover h-full w-full inset-0"
                    src={propertyIMG.src}
                    alt="ReactProject"
                />
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">React</h2>
                    <h3>React | Redux Toolkit | Express JS | MongoDB</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This app was built as learning project. Frontend part was built using React, Redux Toolkit, Saas Modules and Backend part using Express.js, MongoDB. This app can Add Users and Add some tweets - in the same time you can delete them or edit.
                    </p>
                    <a
                        href="https://github.com/Alex-Bezotosnyi/Users-Tweets__React-Redux-Express-MongoDB"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a
                        href="https://alex-bezotosnyi.github.io/Users-Tweets__React-Redux-Express-MongoDB/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Redux Toolkit
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Express.js
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> MongoDB
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">
                        Back
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default property;