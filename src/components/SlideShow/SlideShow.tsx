import { useState } from "react";
import "./slideshow.css";

export default function SlideShow(props: {
	images: string[];
	isHovered: boolean;
	title: string;
}) {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const activeSlide = document.querySelector(`[data-carousel-item="active"]`);
	const changeSlide = ({
		index,
		direction,
	}: {
		index: number;
		direction: "left" | "right" | "direct";
	}) => {
		let nextIndex: number = 0;
		switch (direction) {
			case "left":
				nextIndex = index >= 0 ? index : props.images.length - 1;
				setActiveSlideIndex(nextIndex);
				break;
			case "right":
				nextIndex = index <= props.images.length - 1 ? index : 0;
				setActiveSlideIndex(nextIndex);
				break;
			case "direct":
				nextIndex = index;
				setActiveSlideIndex(nextIndex);
				break;
		}
		const nextSlide = document.getElementById(
			`${props.title}-slide-${nextIndex}`
		);
		nextSlide?.scrollIntoView({ behavior: "smooth" });
		activeSlide?.setAttribute("data-carousel-item", "false");
		nextSlide?.setAttribute("data-carousel-item", "active");
	};
	return (
		<div id="slideshow-container" className="w-full mt-5">
			{/* Slider images */}
			<ul className="flex h-56 overflow-hidden rounded-lg md:h-96 overflow-x-hidden snap-x">
				{props.images?.map((src, index) => {
					return (
						<li
							className="duration-700 ease-in-out slideshow-item snap-center"
							data-carousel-item="active"
							id={`${props.title}-slide-${index}`}
							key={`${props.title}-slide-${index}`}
						>
							<img
								src={src}
								alt={`${props.title}-slide-${index}`}
								className="w-10/12 place-self-center"
							/>
						</li>
					);
				})}
			</ul>

			{/* Slider indicators */}
			<ul className="absolute flex z-30 -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-10 left-1/2">
				{props.images?.map((_, index) => {
					return (
						<li
							key={`${props.title}-indicator-${index}`}
							className={`transition-all delay-300 duration-700 ease-out ${props.isHovered ? "opacity-100 translate-y-5" : "opacity-0"}`}
						>
							<button
								type="button"
								className={`w-3 h-3 rounded-full cursor-pointer ${
									index === activeSlideIndex ? "active-indicator" : "indicator"
								}`}
								aria-current="true"
								aria-label={`Slide ${index + 1}`}
								data-carousel-slide-to={index}
								id={`${props.title}-indicator-${index}`}
								onClick={() =>
									changeSlide({
										index: index,
										direction: "direct",
									})
								}
							></button>
						</li>
					);
				})}
			</ul>

			{/* Slider buttons */}
			<button
				type="button"
				className={`absolute top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer flex focus:outline-none transition-opacity duration-700 ease-out opacity-0 ${props.isHovered ? "opacity-100" : "opacity-0"}`}
				onClick={() =>
					changeSlide({ index: activeSlideIndex - 1, direction: "left" })
				}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:outline-none">
					<svg
						className="w-5 h-5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className={`absolute top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer flex focus:outline-none transition-opacity duration-700 ease-out opacity-0 ${props.isHovered ? "opacity-100" : "opacity-0"}`}
				onClick={() =>
					changeSlide({ index: activeSlideIndex + 1, direction: "right" })
				}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:outline-none">
					<svg
						className="w-5 h-5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
}
