import TMDB from '../config/TMDB';

const getTrendingAll = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.trending.trending_day);
	data.results.type = 'Trending';
	return data.results;
};

export default getTrendingAll;

