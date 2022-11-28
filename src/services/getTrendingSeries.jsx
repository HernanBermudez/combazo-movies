import TMDB from '../config/TMDB';

const getTrendingSeries = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.trending.trending_tv_week);
	results.type = 'Trending Now';
	return results;
};

export default getTrendingSeries;

