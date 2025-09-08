import { Outlet } from "react-router";
import "./root.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Root() {
	return (
		<div className="h-full">
			<title>Christophe Renaud's Portfolio</title>
			<Header />
			<div className="content place-self-end">
				<Outlet />
				<Footer />
			</div>
		</div>
	);
}
