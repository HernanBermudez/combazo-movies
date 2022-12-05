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
			<Carousel data={upcoming} latest='latest' />
			<Carousel data={onAirToday} latest='latest' />
			<Carousel data={onAir} latest='latest' />
			<Carousel data={nowPlaying} latest='latest' />
		</>
	);
};

export default Latest;

