import TMDB from '../config/TMDB';

const getOnAir = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.series.on_air);
	data.results.type = 'On Air';
	return data.results;
};

export default getOnAir;

