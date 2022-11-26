import TMDB from '../config/TMDB';
import { trailerUrl } from '../helpers/constants';

const getTrailersInfo = async (ids, type) => {
	const trailersInfoId = [];
	const trailers = [];
	if (type.includes('series')) {
		try {
			ids.map(
				async id =>
					await TMDB.api
						.get(TMDB.paths.series.default + id + TMDB.paths.videos)
						.then(response => response.data.results)
						.then(results =>
							results.map(key => {
								if (key.type == 'Teaser' && key.site == 'YouTube') {
									trailersInfoId.push(key.key);
								}
								return trailersInfoId;
							})
						)
						.then(keys =>
							keys.map((key, index) => {
								trailers.push(trailerUrl[0] + key[index] + trailerUrl[1]);
								return trailers;
							})
						)
			);
		} catch (error) {
			console.log(error);
		}
	} else {
		try {
			ids.map(
				async id =>
					await TMDB.api
						.get(TMDB.paths.movies.default + id + TMDB.paths.videos)
						.then(response => response.data.results)
						.then(results =>
							results.map(key => {
								if (key.type == 'Teaser' && key.site == 'YouTube') {
									trailersInfoId.push(key.key);
								}
								return trailersInfoId;
							})
						)
						.then(keys =>
							keys.map((key, index) => {
								trailers.push(trailerUrl[0] + key[index] + trailerUrl[1]);
								return trailers;
							})
						)
			);
		} catch (error) {
			console.log(error);
		}
	}
	console.log(trailers);
	return trailers;
};

export default getTrailersInfo;

