import { type SVGProps } from "react";
import { styled } from "styled-components";

export const StyledCursor = styled.div`
	mix-blend-mode: difference;
	background-color: var(--theme-beige);
	position: fixed;
	top: 0;
	left: 0;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	pointer-events: none;
	transform: translate(-50%, -50%);
	z-index: 9999;
`;

const IconCursor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-cursor"
		{...props}
	>
		<title>Cursor</title>
	</svg>
);

export default IconCursor;
