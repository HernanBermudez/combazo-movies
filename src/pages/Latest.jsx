import { useEffect } from 'react';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Latest = () => {
	const { nowPlaying, upcoming, onAir, onAirToday } = useMovies();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Carousel data={upcoming} />
			<Carousel data={onAirToday} />
			<Carousel data={onAir} />
			<Carousel data={nowPlaying} />
		</>
	);
};

export default Latest;

