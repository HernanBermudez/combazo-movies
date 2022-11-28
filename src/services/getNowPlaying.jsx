import TMDB from '../config/TMDB';

const getNowPlaying = async () => {
	const {
		data: { results },
	} = await TMDB.api.get(TMDB.paths.movies.nowPlaying);
	results.type = 'New Releases';
	return results;
};

export default getNowPlaying;

