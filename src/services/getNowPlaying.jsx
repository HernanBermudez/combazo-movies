import TMDB from '../config/TMDB';

const getNowPlaying = async () => {
	const { data } = await TMDB.api.get(TMDB.paths.movies.nowPlaying);
	data.results.type = 'Releases this week';
	return data.results;
};

export default getNowPlaying;

