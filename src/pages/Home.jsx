import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import useMovies from '../hooks/useMovies';

const Home = () => {
	const { trending, trendingTv } = useMovies();
	return (
		<>
			<NavBar />
			<Carousel data={trending} />
			<Carousel data={trendingTv} />
		</>
	);
};

export default Home;

