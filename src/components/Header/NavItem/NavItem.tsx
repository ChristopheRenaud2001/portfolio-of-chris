import type { IconType } from "react-icons";
import { Link } from "react-scroll";

export default function NavItem(props: {
	icon: IconType;
	label: string;
	className?: string;
	to: string;
}) {
	return (
		<li
			className={`icon nav-item py-4 ${props.className ? ` ${props.className}` : ""}`}
		>
			<Link to={props.to} smooth={true} duration={600} isDynamic={true}>
				<props.icon className="inline transition ease-in-out w-5 h-5 hover:scale-150 opacity-80 hover:opacity-100 hover:cursor-pointer" />
			</Link>
		</li>
	);
}
