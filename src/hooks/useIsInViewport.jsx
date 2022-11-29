import { useEffect, useState, useMemo } from 'react';

const useIsInViewport = ref => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsIntersecting(entry.isIntersecting)
			),
		[]
	);

	useEffect(() => {
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [observer]);

	return isIntersecting;
};

export default useIsInViewport;

