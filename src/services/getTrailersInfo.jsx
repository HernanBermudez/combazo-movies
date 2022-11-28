import TMDB from '../config/TMDB';
import { trailerUrl } from '../helpers/constants';

const getTrailersInfo = async (ids, type) => {
	const trailers = await Promise.all(
		ids.map(id =>
			TMDB.api
				.get('/' + type + '/' + id + TMDB.paths.videos)
				.then(response => response.data.results)
				.then(results =>
					results.map(key => {
						if (key.type == 'Teaser' && key.site == 'YouTube') {
						}
					})
				)
				.then(keys =>
					keys.map((key, index) => {
						trailerUrl[0] + key[index] + trailerUrl[1];
					})
				)
				.catch(console.error())
		)
	);
	return trailers;
};
export default getTrailersInfo;

