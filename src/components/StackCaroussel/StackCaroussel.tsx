import "./stack-caroussel.css";
import { createElement } from "react";
import type { IconType } from "react-icons";

export default function StackCaroussel(props: { stacks: IconType[] }) {
	return (
		<div className="stack-caroussel place-self-center">
			<div className="stack-caroussel-items">
				{props.stacks.map((stack, index) => (
					<div key={index}>
						{createElement(stack, {
							className: "w-7 h-7 mx-5 stack-caroussel-item",
						})}
					</div>
				))}
				{props.stacks.map((stack, index) => (
					<div key={index}>
						{createElement(stack, {
							className: "w-7 h-7 mx-5 stack-caroussel-item",
						})}
					</div>
				))}
			</div>
		</div>
	);
}
