import "./root.css";
import Footer from "./components/Footer/Footer";
import DesktopHeader from "./components/Header/DesktopHeader/DesktopHeader";
import IconCursor, {StyledCursor} from "./components/Cursor/IconCursor";
import {useEffect, useRef} from "react";
import {StyledBackground} from "./components/Background/background";
import MobileHeader from "./components/Header/MobileHeader/MobileHeader";
import Home from "./pages/Home/Home";

export default function Root() {
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			if (cursorRef.current) {
				cursorRef.current.style.top = `${e.clientY}px`;
				cursorRef.current.style.left = `${e.clientX}px`;
			}
		});
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (cursorRef.current) {
				if (window.scrollY > 500) {
					document.getElementById("bg")?.classList.add("changeBgSize");
				} else {
					document.getElementById("bg")?.classList.remove("changeBgSize");
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="h-full flex flex-col">
			<StyledBackground id="bg" />
			<title>Chris' Portfolio</title>
			<DesktopHeader />
			<MobileHeader />
			<div className="content flex place-self-end w-full">
				<Home />
			</div>
			<Footer />

			<StyledCursor ref={cursorRef}>
				<IconCursor />
			</StyledCursor>
		</div>
	);
}
