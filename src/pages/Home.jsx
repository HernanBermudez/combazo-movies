import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Home = () => {
	const { trending, trendingTv } = useMovies();
	return (
		<>
			<div className='text-4xl'>Home desde componente</div>
			<Carousel data={trending} />
			<Carousel data={trendingTv} />
		</>
	);
};

export default Home;

