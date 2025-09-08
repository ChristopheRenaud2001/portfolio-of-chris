import type { IconType } from "react-icons";
import "./navItem.css";

export default function NavItem(props: { icon: IconType; className?: string }) {
	return (
		<li className={`nav-item py-4 ${props.className}`}>
			<props.icon className="transition ease-in-out w-5 h-5 hover:scale-130 opacity-50 hover:opacity-80 hover:cursor-pointer" />
		</li>
	);
}
