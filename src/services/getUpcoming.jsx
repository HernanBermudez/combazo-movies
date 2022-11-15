import TMDB from '../config/TMDB';

const getUpcoming = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.movies.upcoming);
	data.results.type = 'Coming soon';
	return data.results;
};

export default getUpcoming;

