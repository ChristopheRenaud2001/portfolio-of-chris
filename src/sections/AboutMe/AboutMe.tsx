import {useRef} from "react";
import {useHasRendered} from "../../utils/hooks";

function AboutMe() {
	const section1Ref = useRef<HTMLDivElement>(null);
	const section1HasRendered = useHasRendered({
		ref: section1Ref as React.RefObject<HTMLDivElement>,
	});
	return (
		<div id="about-me" className="mt-12 px-8 md:px-20">
			<div
				className={`flex flex-col min-h-screen max-h-fit place-content-center mb-10 md:mb-0 transition-all ease-in-out duration-1500 ${section1HasRendered ? "opacity-100 translate-y-0 md:translate-x-0" : "opacity-0 translate-y-15 md:translate-x-15"}`}
				ref={section1Ref}
			>
				<h2 className="text-4xl font-bold mb-6">About Me</h2>
				<p className="text-2xl mb-4">
					Hi, I'm Chris and I have a college degree in computer science. I have experience in
					information technologies such as physical computers, application development and technical
					support. I'm curious, creative, diligent and always wanting to learn new things.
				</p>
				<p className="text-2xl mb-4">
					I have over 3 years of experience in web development, which consists of 2 COOP internships
					at{" "}
					<a href="https://www.canada.ca/en/employment-social-development.html" target="_blank">
						<u>Employment and Social Development Canada (ESDC)</u>
					</a>{" "}
					for a total of around 7-8 months (two summers) and just under 3 years as a frontend
					developer at{" "}
					<a href="https://epsi-inc.com/" target="_blank">
						<u>EPSI</u>
					</a>
					, a consulting firm and human resources partner based in Gatineau, Quebec.
				</p>
				<p className="text-2xl mb-4">
					With these experiences, I've honed my skills in not only developing applications and
					programming efficiency, but also in communication and teamwork. I've learned to work with
					coworkers and clients, to understand client needs and to resolve issues and bugs. I've
					also gained experience in supervising QA and in taking the initiative for designs and
					development decisions.
				</p>
				<p className="text-2xl">
					In summary, I am someone who is passionate about technologies and am always looking for
					new opportunities to learn, grow and contribute. If you have any questions or would like
					to connect, feel free to reach out!
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
