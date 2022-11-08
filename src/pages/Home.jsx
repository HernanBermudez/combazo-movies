import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import useMovies from '../hooks/useMovies';

const Home = () => {
	const { trendingMovies, trendingSeries, trendingAll } = useMovies();
	return (
		<>
			<NavBar />
			<Carousel data={trendingAll} />
			<Carousel data={trendingSeries} />
			<Carousel data={trendingMovies} />

			<Footer />
		</>
	);
};

export default Home;

