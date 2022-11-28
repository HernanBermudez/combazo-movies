import TMDB from '../config/TMDB';

const getBackdrops = content => {
	const backdropsPath = Object.values(content).map(key => key.backdrop_path);
	const filteredBackdropsPath = backdropsPath.filter(img => img !== null);
	const backdrops = filteredBackdropsPath.map(
		backdrop => TMDB.images.base_url + TMDB.images.sizes.original + backdrop
	);
	return backdrops;
};

export default getBackdrops;

