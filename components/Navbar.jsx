import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ThemeModeSwitch from "./modules/ThemeModeSwitch";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import LogoDarkIMG from "../public/assets/main/logo-dark.png";
import LogoIMG from "../public/assets/main/logo.png";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const dark = theme === "dark" ? true : false;

	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [linkColor, setLinkColor] = useState("#1f2937");

	const router = useRouter();

	useEffect(() => {
		if (router.asPath === "/property" || router.asPath === "/property") {
			setLinkColor("#f8f8f8");
		} else {
			setLinkColor("#1f2937");
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: "transparent" }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100] bg-blue-600"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					<img
						src={dark ? LogoDarkIMG.src : LogoIMG.src}
						alt="Portfolio"
						width="125"
						height="50"
					/>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="hidden md:flex"
					>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-100">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-100">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-100">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-100">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-100">
								Contact
							</li>
						</Link>
						<li className="ml-20">
							<ThemeModeSwitch />
						</li>
					</ul>
					<div className="md:hidden" onClick={handleNav}>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
						: ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-[#121212]"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<img
									src={dark ? LogoDarkIMG.src : LogoIMG.src}
									alt="Portfolio"
									width="87"
									height="35"
								/>
							</Link>
							<div
								className="rounded-full shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md"
								onClick={handleNav}
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4 dark:text-gray-50">
								Let's build something legendary together
							</p>
						</div>
					</div>
					<div className="flex flex-col py-4">
						<ul className="uppercase">
							<li className="py-4">
								<ThemeModeSwitch />
							</li>
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm dark:text-gray-100"
								>
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm dark:text-gray-100"
								>
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm dark:text-gray-100"
								>
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm dark:text-gray-100"
								>
									Projects
								</li>
							</Link>
							<Link href="/#contact">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm dark:text-gray-100"
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className="border-t border-gray-300 my-2 pt-4">
							<p className="uppercase tracking-widest text-[#5651e5] dark:text-gray-100">
								Let's Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<Link href="https://www.linkedin.com/in/alex-bezotosnyi/">
									<div className="rounded-full shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<FaLinkedinIn />
									</div>
								</Link>
								<Link
									href="https://t.me/AlexBezotosnyi"
									target="_blank"
								>
									<div className="rounded-full shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<FaTelegramPlane />
									</div>
								</Link>
								<Link
									href="https://github.com/Alex-Bezotosnyi/"
									target="_blank"
								>
									<div className="rounded-full shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<FaGithub />
									</div>
								</Link>
								<Link
									href="mailto:alexbezaua@gmail.com"
									target="_blank"
								>
									<div className="rounded-full shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow-md">
										<AiOutlineMail />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
