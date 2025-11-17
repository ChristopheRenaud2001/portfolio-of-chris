import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaAt } from "react-icons/fa";

export default function Footer() {
	return (
		<footer
			id="contact-me"
			className="py-6 h-50 mb-20 md:mb-0 flex flex-col md:place-self-end place-items-center place-content-center"
		>
			<p>Don't hesitate to reach out!</p>
			<div className="mt-4">
				<BsLinkedin
					className="w-6 h-6 inline-block mx-2 transition ease-in-out hover:scale-130 opacity-40 hover:opacity-80  hover:cursor-pointer"
					onClick={() =>
						window.open(
							"https://www.linkedin.com/in/christophe-renaud-4290b2239/",
							"_blank"
						)
					}
				/>
				<BsGithub
					className="w-6 h-6 inline-block mx-2 transition ease-in-out hover:scale-130 opacity-50 hover:opacity-80  hover:cursor-pointer"
					onClick={() =>
						window.open("https://github.com/ChristopheRenaud2001", "_blank")
					}
				/>
				<FaAt
					className="w-6 h-6 inline-block mx-2 transition ease-in-out hover:scale-130 opacity-50 hover:opacity-80  hover:cursor-pointer"
					onClick={() => window.open("mailto:christophe_renaud@outlook.com")}
				/>
			</div>
		</footer>
	);
}
