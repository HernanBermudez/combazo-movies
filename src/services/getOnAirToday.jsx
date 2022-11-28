import TMDB from '../config/TMDB';

const getOnAirToday = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.series.on_air_today);
	results.type = 'Releases Today';
	return results;
};

export default getOnAirToday;

