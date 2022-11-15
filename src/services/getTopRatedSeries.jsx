import TMDB from '../config/TMDB';

const getTopRatedSeries = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.series.top_rated);
	data.results.type = 'Top Rated Series';
	return data.results;
};

export default getTopRatedSeries;

