import { useRef } from "react";
import { useHasRendered } from "../../utils/hooks";

function AboutMe() {
	const section1Ref = useRef<HTMLDivElement>(null);
	const section1HasRendered = useHasRendered({
		ref: section1Ref as React.RefObject<HTMLDivElement>,
	});
	return (
		<div id="about-me" className="mt-12">
			<div
				className={`h-screen content-center transition-all ease-in-out duration-1500 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-15"}`}
				ref={section1Ref}
			>
				<h2 className="text-4xl font-bold mb-6">About Me</h2>
				<p className="text-2xl mb-4">
					Hi, I'm Chris and I'm a web developer. I mainly do front-end
					development and design, but I also have some back-end experience. I'm
					curious, creative, and always wanting to learn new things.
				</p>
				<p className="text-2xl">
					I have over 3 years of experience in web development, which consists
					of 2 COOP internships at{" "}
					<a
						href="https://www.canada.ca/en/employment-social-development.html"
						target="_blank"
					>
						<u>Employment and Social Development Canada (ESDC)</u>
					</a>{" "}
					for a total of around 7-8 months (two summers) and just under 3 years
					as a frontend developer at{" "}
					<a href="https://epsi-inc.com/" target="_blank">
						<u>EPSI</u>
					</a>
					, a consulting firm and human resources partner based in Gatineau,
					Quebec.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
