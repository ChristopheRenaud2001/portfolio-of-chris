import { useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./project.css";

export default function Project(props: {
	link?: string;
	title: string;
	images?: string[];
}) {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div className="relative border-corner my-10 group">
			<div className="p-4 flex flex-col place-items-center">
				<div className="flex w-fit">
					<h3 className="flex-none text-2xl border-corner cursor-pointer w-fit">
						<button
							className="flex-1 cursor-pointer"
							onClick={() => setOpen((prevOpen) => !prevOpen)}
						>
							{props.title}

							<span className="block custom-underline w-full h-0.5 trasition-all ease-in-out duration-800 max-w-0 group-hover:max-w-full" />
						</button>
					</h3>
					{!!props.link && (
						<a
							className="ms-4 md:ms-4 self-center"
							href={props.link}
							target="_blank"
						>
							<FaExternalLinkAlt className="w-5 h-5" />
						</a>
					)}
				</div>

				<div
					className={`w-full flex transition-all ease-in-out duration-800 overflow-hidden place-self-center ${open ? "h-60 md:h-100" : "h-0"}`}
				>
					{!!props.images && props.images.length > 0 && (
						<SlideShow images={props.images} open={open} title={props.title} />
					)}
				</div>
			</div>
		</div>
	);
}
