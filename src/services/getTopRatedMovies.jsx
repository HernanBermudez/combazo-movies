import TMDB from '../config/TMDB';

const getTopRatedMovies = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.movies.top_rated);
	data.results.type = 'Top Rated Movies';
	return data.results;
};

export default getTopRatedMovies;

