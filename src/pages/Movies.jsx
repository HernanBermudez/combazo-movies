import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import useMovies from '../hooks/useMovies';

const Movies = () => {
	const {
		trendingMovies,
		nowPlaying,
		upcoming,
		popularMovies,
		topRatedMovies,
		onAir,
	} = useMovies();

	return (
		<>
			{/* <NavBar /> */}
			<Banner />
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

