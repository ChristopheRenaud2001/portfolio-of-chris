import "./header.css";
import { IoPerson } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import NavItem from "./NavItem/NavItem";

export default function Header() {
	return (
		<header className="fixed h-screen header-bg px-4 content-center place-items-center w-20">
			<nav className="w-fit">
				<ul>
					<NavItem icon={IoPerson} label="Me" to="me" />
					<NavItem icon={TiInfoLarge} label="About Me" to="about-me" />
					<NavItem icon={FaCode} label="Project" to="projects" />
					<NavItem icon={IoMail} label="Contact Me" to="contact-me" />
				</ul>
			</nav>
		</header>
	);
}
