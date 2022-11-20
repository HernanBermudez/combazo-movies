import { useEffect } from 'react';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Search = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { search } = useMovies();

	return (
		<>
			<div className='ml-20 mt-20'>Explore titles related to: </div>
			{search ? <Carousel data={search} search={search} /> : 'Error'}
		</>
	);
};

export default Search;

