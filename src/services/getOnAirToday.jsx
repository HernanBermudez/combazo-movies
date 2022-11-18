import TMDB from '../config/TMDB';

const getOnAirToday = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.series.on_air_today);
	data.results.type = 'New on Netflix';
	return data.results;
};

export default getOnAirToday;

