import TMDB from '../config/TMDB';
import { trailerUrl } from '../helpers/constants';

const getTrailers = async data => {
	const ids = Object.values(data).map(id => id.id);
	ids.pop();
	const { media_type } = Object.values(data).find(key => key.media_type);

	const trailersInfo = await Promise.all(
		ids.map(
			async id =>
				await TMDB.api
					.get('/' + media_type + '/' + id + TMDB.paths.videos)
					.then(response => response.data.results)
					.catch(error => console.log(error))
		)
	);

	const trailersKey = trailersInfo.flatMap(key => {
		const trailersObject = key.map(
			objects => objects.type == 'Trailer' && objects.key
		);
		return trailersObject;
	});

	const trailersFiltered = trailersKey.filter(key => key !== false);
	console.log(trailersFiltered);
	return trailersInfo;
};

export default getTrailers;

