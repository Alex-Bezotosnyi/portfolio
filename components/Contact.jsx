import React, {useState} from 'react';
import Link from "next/link";
import {sendContactForm} from "../lib/api";

import {AiOutlineMail} from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import ContactIMG from "../public/assets/main/contact.png";

const initValues = {name: "", email: "", subject: "", message: ""};
const initState = {isLoading: false, error: "", values: initValues};

const Contact = () => {
    const [state, setState] = useState(initState);
    const {values, isLoading, error} = state;

    const handleChange = ({target}) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmitForm = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setState(initState);

        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    return (
        <div id="contact"
             className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest lg:mx-auto mx-4 uppercase text-[#5651e5] dark:text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4 lg:mx-auto mx-4">
                    Get In Touch
                </h2>
                <div className="grid lg:grid-cols-5 gap-8">

                    <div
                        className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4  dark:shadow-gray-600 shadow-md">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300"
                                     src={ContactIMG.src}
                                     alt="Contact"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">
                                    Oleksandr Bezotosnyi
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
                                <div className="flex items-center justify-between py-4 px-8">
                                    <Link href="https://www.linkedin.com/in/alex-bezotosnyi/" target="_blank">
                                        <div
                                            className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 shadow-gray-700 shadow-md">
                                            <FaLinkedinIn/>
                                        </div>
                                    </Link>
                                    <Link href="https://github.com/Alex-Bezotosnyi/" target="_blank">
                                        <div
                                            className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 shadow-gray-700 shadow-md">
                                            <FaGithub/>
                                        </div>
                                    </Link>
                                    <Link href="mailto:alexbezaua@gmail.com" target="_blank">
                                        <div
                                            className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 shadow-gray-700 shadow-md">
                                            <AiOutlineMail/>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:shadow-gray-600 shadow-md">
                        <div className="p-4">
                            <form>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Name
                                    </label>
                                    <input type="text"
                                           name="name"
                                           value={values.name}
                                           onChange={handleChange}
                                           className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-200 text-gray-800"
                                    />
                                </div>

                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input type="email"
                                           name="email"
                                           value={values.email}
                                           onChange={handleChange}
                                           className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-200 text-gray-800"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input type="text"
                                           name="subject"
                                           value={values.subject}
                                           onChange={handleChange}
                                           className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-200 text-gray-800"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea rows="10"
                                              name="message"
                                              value={values.message}
                                              onChange={handleChange}
                                              className="border-2 rounded-lg p-3 border-gray-300 dark:bg-gray-200 text-gray-800"/>
                                </div>
                                <button
                                    onClick={onSubmitForm}
                                    className="w-full p-4 text-gray-100 mt-4 uppercase dark:shadow-gray-800"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div
                            className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-400 shadow-gray-600 shadow-md">
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