import { useEffect } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Series = () => {
	const {
		trendingSeries,
		popularSeries,
		topRatedSeries,
		onAir,
		onAirToday,
		trailersSeries,
	} = useMovies();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Banner data={popularSeries} />
			<Carousel data={popularSeries} />
			<Carousel data={trendingSeries} />
			<Carousel data={topRatedSeries} />
			<Carousel data={onAirToday} />
			<Carousel data={onAir} />
		</>
	);
};

export default Series;

