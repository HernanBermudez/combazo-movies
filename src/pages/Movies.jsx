import { useEffect } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Movies = () => {
	const {
		trendingMovies,
		nowPlaying,
		upcoming,
		popularMovies,
		topRatedMovies,
		onAir,
		trailersMovies,
	} = useMovies();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Banner data={trendingMovies} />
			<Carousel data={trendingMovies} />
			<Carousel data={nowPlaying} />
			<Carousel data={upcoming} />
			<Carousel data={popularMovies} />
			<Carousel data={topRatedMovies} />
			<Carousel data={onAir} />
		</>
	);
};

export default Movies;

