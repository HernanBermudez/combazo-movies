import TMDB from '../config/TMDB';

const getTrendingMovies = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.trending.trending_movie_day);
	data.results.type = 'Movies';
	return data.results;
};

export default getTrendingMovies;

