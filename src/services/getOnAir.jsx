import TMDB from '../config/TMDB';

const getOnAir = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.series.on_air);
	data.results.type = 'Releases next week';
	return data.results;
};

export default getOnAir;

