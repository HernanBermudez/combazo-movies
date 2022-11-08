import TMDB from '../config/TMDB';

const getTrendingSeries = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.trending.trending_tv_week);
	data.results.type = 'Series';
	return data.results;
};

export default getTrendingSeries;

