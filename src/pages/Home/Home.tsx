import AboutMe from "../../sections/AboutMe/AboutMe";
import Me from "../../sections/Me/Me";
import Projects from "../../sections/Projects/Projects";

function Home() {
	return (
		<div className="flex flex-col max-w-full" style={{ fontFamily: "Prata" }}>
			<Me />
			<AboutMe />
			<Projects />
		</div>
	);
}
export default Home;
