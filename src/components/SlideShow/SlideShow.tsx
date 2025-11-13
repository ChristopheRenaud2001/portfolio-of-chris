import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import "./slideshow.css";

export default function SlideShow(props: {
	images: string[];
	open: boolean;
	title: string;
}) {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
	const [activeImage, setActiveImage] = useState<string | null>(null);
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
		nextSlide?.scrollIntoView({ behavior: "smooth", block: "nearest" });
		activeSlide?.setAttribute("data-carousel-item", "false");
		nextSlide?.setAttribute("data-carousel-item", "active");
	};
	return (
		<>
			<div
				id="slideshow-container"
				className="w-full flex flex-col place-content-center"
			>
				{/* Slider images */}
				<ul className="flex h-40 md:h-96 overflow-hidden rounded-lg overflow-x-hidden snap-x">
					{props.images?.map((src, index) => {
						return (
							<li
								className="duration-700 ease-in-out slideshow-item snap-center flex place-items-center"
								data-carousel-item={index === 0 ? "active" : undefined}
								id={`${props.title}-slide-${index}`}
								key={`${props.title}-slide-${index}`}
							>
								<div
									className="relative w-full h-fit cursor-pointer group/img"
									onClick={() => setActiveImage(src)}
								>
									<div className="flex flex-col h-full w-full">
										<img
											src={src}
											alt={`${props.title}-slide-${index}`}
											className="flex w-10/12 place-self-center self-center group-hover/img:opacity-50 max-h-100"
										/>
									</div>
									<FaEye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover/img:block w-6 h-6" />
								</div>
							</li>
						);
					})}
				</ul>

				{/* Slider indicators */}
				<ul className="absolute flex z-10 -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-10 left-1/2">
					{props.images?.map((_, index) => {
						return (
							<li
								key={`${props.title}-indicator-${index}`}
								className={`transition-all delay-300 duration-700 ease-out ${props.open ? "opacity-100 translate-y-5" : "opacity-0"}`}
							>
								<button
									type="button"
									className={`w-3 h-3 rounded-full cursor-pointer ${
										index === activeSlideIndex
											? "active-indicator"
											: "indicator"
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
					className={`absolute top-0 start-0 z-10 items-center justify-center h-full px-4 cursor-pointer flex focus:outline-none transition-opacity duration-700 ease-out opacity-0 ${props.open ? "opacity-100" : "opacity-0"}`}
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
					className={`absolute top-0 end-0 z-10 items-center justify-center h-full px-4 cursor-pointer flex focus:outline-none transition-opacity duration-700 ease-out opacity-0 ${props.open ? "opacity-100" : "opacity-0"}`}
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

			{!!activeImage && (
				<div
					className={`w-screen h-screen fixed top-0 left-0 z-20 modal modal-bg`}
				>
					<div className="h-full w-full">
						<IoCloseSharp
							className="w-10 h-10 absolute top-5 right-5 cursor-pointer"
							onClick={() => setActiveImage(null)}
						/>
						<img
							src={activeImage}
							alt={`Active image displayed in modal-open for ${props.title}`}
							className="place-self-center align-middle w-full h-full object-contain"
						/>
					</div>
				</div>
			)}
		</>
	);
}
