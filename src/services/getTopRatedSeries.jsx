import TMDB from '../config/TMDB';

const getTopRatedSeries = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.series.top_rated);
	results.type = 'Top Rated Series';
	return results;
};

export default getTopRatedSeries;

