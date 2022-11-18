import { useEffect } from 'react';
import useMovies from '../hooks/useMovies';

const Search = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { search } = useMovies();
	return <div>Search page</div>;
};

export default Search;

