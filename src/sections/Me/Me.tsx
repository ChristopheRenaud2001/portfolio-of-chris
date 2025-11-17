import StackCaroussel from "../../components/StackCaroussel/StackCaroussel";
import { useHasRendered } from "../../utils/hooks";
import { useRef } from "react";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";

function Me() {
	const section1Ref = useRef<HTMLDivElement>(null);
	const section1HasRendered = useHasRendered({
		ref: section1Ref as React.RefObject<HTMLDivElement>,
		lockOnceRendered: true,
	});
	return (
		<div id="me" className="place-items-center">
			<div className="h-screen flex flex-col justify-center items-center">
				<div className="w-fit mb-10">
					<p
						className={`text-center text-xl transition-all ease-in-out duration-1200 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
						ref={section1Ref}
					>
						Hello, I'm
					</p>
					<h1 className="whitespace-normal text-center">
						<span
							className={`block transition ease-in-out delay-250 duration-1200 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
						>
							Christophe
						</span>
						<span
							className={`block transition ease-in-out delay-250 duration-1200 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
						>
							Renaud
						</span>
					</h1>
					<p
						className={`text-center text-xl transition-all ease-in-out delay-500 duration-1200 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
					>
						Web developer and UI/UX enthusiast
					</p>
				</div>

				<StackCaroussel
					stacks={[
						FaReact,
						FaHtml5,
						FaCss3,
						BiLogoJavascript,
						BiLogoTypescript,
						FaAngular,
						FaFigma,
						FaBootstrap,
						RiTailwindCssFill,
						PiFileCSharpDuotone,
						FaGitAlt,
					]}
				/>
			</div>
		</div>
	);
}

export default Me;
