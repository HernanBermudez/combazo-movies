import TMDB from '../config/TMDB';

const getBackdrops = content => {
	const backdropsPath = Object.values(content).map(key => key.backdrop_path);
	backdropsPath.pop();
	const backdrops = backdropsPath.map(
		backdrop => TMDB.images.base_url + TMDB.images.sizes.original + backdrop
	);
	return backdrops;
};

export default getBackdrops;

