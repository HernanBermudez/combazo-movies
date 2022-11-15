import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import useMovies from '../hooks/useMovies';

const Home = () => {
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
			<NavBar />
			<Banner />
			<Carousel data={trendingAll} />
			<Carousel data={trendingSeries} />
			<Carousel data={trendingMovies} />
			<Carousel data={nowPlaying} />
			<Carousel data={upcoming} />
			<Carousel data={popularMovies} />
			<Carousel data={popularSeries} />
			<Carousel data={topRatedMovies} />
			<Carousel data={topRatedSeries} />
			<Carousel data={onAir} />
			<Footer />
		</>
	);
};

export default Home;

