import TMDB from '../config/TMDB';

const getPopularMovies = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.movies.popular);
	data.results.type = 'Popular movies';
	return data.results;
};

export default getPopularMovies;

