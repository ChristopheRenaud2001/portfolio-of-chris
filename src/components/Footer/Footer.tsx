import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaAt } from "react-icons/fa";

export default function Footer() {
	return (
		<div id="contact-me" className="place-items-end">
			<hr />
			<footer className="place-items-center opacity-60 py-6">
				<p>Don't hesitate to reach out!</p>
				<div className="mt-3">
					<BsLinkedin
						className="w-6 h-6 inline-block mx-2 transition ease-in-out hover:scale-130 opacity-50 hover:opacity-80  hover:cursor-pointer"
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
		</div>
	);
}
