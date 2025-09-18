import { useRef, useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import "./project.css";

export default function Project(props: {
	link?: string;
	title: string;
	images?: string[];
}) {
	const [isHovered, setIsHovered] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseEnter = () => {
		// Clear any existing timeout (if user re-enters quickly)
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		// Delay the retraction
		timeoutRef.current = setTimeout(() => {
			setIsHovered(false);
		}, 3500); // 300ms delay before collapsing
	};
	return (
		<div
			className="relative border-corner my-10 group"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="p-4">
				<h3 className="text-2xl border-corner text-center cursor-pointer w-fit place-self-center">
					{!!props.link && (
						<>
							<a href={props.link} target="_blank">
								{props.title}
							</a>
							<span className="flex custom-underline w-auto h-0.5 trasition-all ease-in-out duration-800 max-w-0 group-hover:max-w-full" />
						</>
					)}
					{!props.link && <>{props.title}</>}
				</h3>
				<div
					className={`w-full transition-all ease-in-out duration-800 overflow-hidden place-self-center ${isHovered ? "max-h-100" : "max-h-0"}`}
				>
					{!!props.images && props.images.length > 0 && (
						<SlideShow
							images={props.images}
							isHovered={isHovered}
							title={props.title}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
