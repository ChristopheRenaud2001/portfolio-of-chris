import "./mobileheader.css";
import { IoPerson } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import NavItem from "../NavItem/NavItem";

export default function MobileHeader() {
	return (
		<header className="fixed bottom-0 w-screen header-bg px-4 justify-center place-items-center h-20 flex md:hidden flex-wrap z-50">
			<nav className="w-fit">
				<ul className="flex gap-8">
					<NavItem icon={IoPerson} label="Me" to="me" />
					<NavItem icon={TiInfoLarge} label="About Me" to="about-me" />
					<NavItem icon={FaCode} label="Project" to="projects" />
					<NavItem icon={IoMail} label="Contact Me" to="contact-me" />
				</ul>
			</nav>
		</header>
	);
}
