import useMovies from '../hooks/useMovies';

const Search = () => {
	const { search } = useMovies();
	return <div>Search page</div>;
};

export default Search;

