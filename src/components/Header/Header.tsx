import "./header.css";
import { IoPerson } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import NavItem from "./NavItem/NavItem";

export default function Header() {
	return (
		<header className="h-full header-bg p-4 content-center place-items-center w-20 fixed">
			<nav className="w-fit">
				<ul>
					<NavItem icon={IoPerson} />
					<NavItem icon={TiInfoLarge} />
					<NavItem icon={FaCode} />
					<NavItem icon={IoMail} />
				</ul>
			</nav>
		</header>
	);
}
