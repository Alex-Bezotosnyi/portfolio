import Link from "next/link";
import React from 'react';
import {AiOutlineMail} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const Main = () => {
    return (
        <div id="main"
             className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full flex justify-center items-center p-2 mx-auto ">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm
                        <span className="text-[#5651e5]"> Alex</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        Frontend Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm Frontend Developer specializing in building and designing digital products.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link href="https://www.linkedin.com/in/alex-bezotosnyi/" target="_blank">
                            <div
                                className="rounded-full shadow-lg shadow=gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn/>
                            </div>
                        </Link>
                        <Link href="https://github.com/Alex-Bezotosnyi/" target="_blank">
                            <div
                                className="rounded-full shadow-lg shadow=gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub/>
                            </div>
                        </Link>
                        <div
                            className="rounded-full shadow-lg shadow=gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Main;