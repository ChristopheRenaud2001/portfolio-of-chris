import { Outlet } from "react-router";
import "./root.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IconCursor, { StyledCursor } from "./components/Cursor/IconCursor";
import { useEffect, useRef } from "react";

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

	return (
		<div className="h-full">
			<title>Chris' Portfolio</title>
			<Header />
			<div className="content place-self-end">
				<Outlet />
				<Footer />
			</div>

			<StyledCursor ref={cursorRef}>
				<IconCursor />
			</StyledCursor>
		</div>
	);
}
