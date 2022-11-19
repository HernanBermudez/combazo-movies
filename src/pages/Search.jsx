import { useEffect } from 'react';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Search = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { search } = useMovies();

	return <Carousel data={search} />;
};

export default Search;

