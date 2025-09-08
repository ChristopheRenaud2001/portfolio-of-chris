import { BiSquare } from "react-icons/bi";

function Me() {
	return (
		<div className="place-items-center">
			<div className="py-10" style={{ fontFamily: "Prata" }}>
				<div className="inline-block place-items-end">
					<div className="w-fit">
						<p className="lg:ps-5 lg:text-start text-center">Hello, I'm</p>
						<h1 className="whitespace-normal lg:text-end text-center">
							<span className="block">Christophe</span>
							<span className="block">Renaud</span>
						</h1>
						<p className="lg:text-end text-center">
							Web developer and UI/UX enthusiast
						</p>
					</div>
				</div>
				<div className="lg:inline-block hidden">
					<BiSquare className="w-60 h-60" />
				</div>
			</div>
		</div>
	);
}

export default Me;
