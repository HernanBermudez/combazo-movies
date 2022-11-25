import { useEffect } from 'react';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Search = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { search, trendingAll } = useMovies();

	return (
		<>
			<div className='ml-20 mt-20 font-light'>
				<p className='opacity-40 whitespace-nowrap'>
					Explore titles related to:
				</p>
				{search ? (
					Object.values(search).map(data => {
						return (
							<p className='inline-block text-start'>
								{data.name || data.original_title} |
							</p>
						);
					})
				) : (
					<p className='text-3xl p-36 text-center justify-center place-items-center'>
						Let's search that movie you have in mind!
					</p>
				)}
			</div>
			{search && <Carousel data={search} search={search} />}
		</>
	);
};

export default Search;

