import TMDB from '../config/TMDB';

const getTrendingAll = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.trending.trending_day);
	results.type = 'Trending Now';
	return results;
};

export default getTrendingAll;

