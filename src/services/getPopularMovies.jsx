import TMDB from '../config/TMDB';

const getPopularMovies = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.movies.popular);
	results.type = 'Popular movies';
	return results;
};

export default getPopularMovies;

