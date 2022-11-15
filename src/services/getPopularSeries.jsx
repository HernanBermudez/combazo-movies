import TMDB from '../config/TMDB';

const getPopularSeries = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.series.popular);
	data.results.type = 'Popular series';
	return data.results;
};

export default getPopularSeries;

