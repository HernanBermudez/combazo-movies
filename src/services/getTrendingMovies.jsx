import TMDB from '../config/TMDB';

const getTrendingMovies = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.trending.trending_movie_day);
	results.type = 'Trending Now';
	return results;
};

export default getTrendingMovies;

