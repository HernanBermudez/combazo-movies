import TMDB from '../config/TMDB';

const getOnAir = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.series.on_air);
	results.type = 'Releases next week';
	return results;
};

export default getOnAir;

