import { useEffect, useState } from "react";

export function useHasRendered({
	ref,
	lockOnceRendered = false,
}: {
	ref: React.RefObject<HTMLDivElement>;
	lockOnceRendered?: boolean;
}) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (lockOnceRendered && isIntersecting) {
				setIntersecting(true);
			} else {
				setIntersecting(entry.isIntersecting);
			}
		});

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref, lockOnceRendered, isIntersecting]);

	return isIntersecting;
}
