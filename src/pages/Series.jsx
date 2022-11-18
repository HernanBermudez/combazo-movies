import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import useMovies from '../hooks/useMovies';

const Series = () => {
	const { trendingSeries, popularSeries, topRatedSeries, onAir } = useMovies();

	return (
		<>
			{/* <NavBar /> */}
			<Banner />
			<Carousel data={trendingSeries} />
			<Carousel data={popularSeries} />
			<Carousel data={topRatedSeries} />
			<Carousel data={onAir} />
		</>
	);
};

export default Series;

