import TMDB from '../config/TMDB';

const getTrendingMovies = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.trending.trending_movie_day);
	results.type = 'Movies';
	return results;
};

export default getTrendingMovies;

