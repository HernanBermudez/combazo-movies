import { useEffect } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const {
		trendingMovies,
		trendingSeries,
		trendingAll,
		nowPlaying,
		upcoming,
		popularMovies,
		popularSeries,
		topRatedMovies,
		topRatedSeries,
		onAir,
	} = useMovies();

	return (
		<>
			<Banner data={trendingAll} />
			<Carousel data={trendingAll} />
			<Carousel data={trendingSeries} />
			<Carousel data={trendingMovies} />
			<Carousel data={nowPlaying} />
			<Carousel data={upcoming} />
			<Carousel data={popularSeries} />
			<Carousel data={popularMovies} />
			<Carousel data={topRatedMovies} />
			<Carousel data={topRatedSeries} />
			<Carousel data={onAir} />
		</>
	);
};

export default Home;

