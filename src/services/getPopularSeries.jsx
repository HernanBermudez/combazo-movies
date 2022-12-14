import TMDB from '../config/TMDB';

const getPopularSeries = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.series.popular);
	results.type = 'Popular on Netflix';
	return results;
};

export default getPopularSeries;

