import TMDB from '../config/TMDB';

const getUpcoming = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.movies.upcoming);
	results.type = 'Coming soon';
	return results;
};

export default getUpcoming;

