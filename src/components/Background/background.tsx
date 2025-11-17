import { styled } from "styled-components";

export const StyledBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	/* Add your background pattern here */
	background-image: linear-gradient(
		to right,
		var(--theme-dark) 97%,
		var(--theme-gray) 97%,
		var(--theme-gray) 100%
	);
	background-size: 80px 80px;
	z-index: -1;

	&.changeBgSize {
		transition: transform 1s ease-in-out;
		transform-origin: center;
		transform: scale(1.55);
	}

	&:not(.changeBgSize) {
		transition: transform 1s ease-in-out;
		transform-origin: center;
		transform: scale(1) !important;
	}
`;
