import { BiSquare } from "react-icons/bi";
import { useHasRendered } from "../../utils/hooks";
import { useRef } from "react";

function Me() {
	const section1Ref = useRef<HTMLDivElement>(null);
	const section1HasRendered = useHasRendered({
		ref: section1Ref as React.RefObject<HTMLDivElement>,
		lockOnceRendered: true,
	});
	return (
		<div id="me" className="place-items-center">
			<div className="h-screen flex justify-center items-center">
				<div className="inline-block place-items-end">
					<div className="w-fit">
						<p
							className={`lg:ps-5 lg:text-start text-center text-xl transition-all ease-in-out duration-1200 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
							ref={section1Ref}
						>
							Hello, I'm
						</p>
						<h1 className="whitespace-normal lg:text-end text-center">
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
							className={`lg:pe-5 lg:text-end text-center text-xl transition-all ease-in-out delay-500 duration-1200 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
						>
							Web developer and UI/UX enthusiast
						</p>
					</div>
				</div>
				<div
					className={`lg:inline-block hidden transition-all ease-in-out delay-500 duration-1000 ${section1HasRendered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
				>
					<BiSquare className="w-60 h-60" />
				</div>
			</div>
		</div>
	);
}

export default Me;
