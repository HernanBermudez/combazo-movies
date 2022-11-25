import TMDB from '../config/TMDB';

const getTopRatedMovies = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.movies.top_rated);
	results.type = 'Top Rated Movies';
	return results;
};

export default getTopRatedMovies;

