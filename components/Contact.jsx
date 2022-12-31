import Image from "next/image";
import Link from "next/link";
import React from 'react';
import {AiOutlineMail} from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import ContactIMG from "../public/assets/main/contact.png";

const Contact = () => {
    return (
        <div id="contact"
             className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">
                    Get In Touch
                </h2>
                <div className="grid lg:grid-cols-5 gap-8">

                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300"
                                       src={ContactIMG.src}
                                       alt="Contact"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">
                                    Name here
                                </h2>
                                <p>
                                    Frontend Developer
                                </p>
                                <p className="py-4">
                                    I am available for freelance or full-time positions. Contact me and let's talk!
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">
                                    Connect With Me
                                </p>
                                <div className="flex items-center justify-between py-4">
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

                    <div className="col-span-3 w-full  h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Name
                                    </label>
                                    <input type="text"
                                           className="border-2 rounded-lg p-3 flex border-gray-300"
                                    />
                                </div>

                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input type="email"
                                           className="border-2 rounded-lg p-3 flex border-gray-300"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input type="text"
                                           className="border-2 rounded-lg p-3 flex border-gray-300"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea rows="10"
                                              className="border-2 rounded-lg p-3 border-gray-300"/>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div
                            className="rounded-full shadow-lg shadow=gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp
                                className="text-[#5651e5]"
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;