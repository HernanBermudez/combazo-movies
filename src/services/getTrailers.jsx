import TMDB from '../config/TMDB';
import getContentId from '../helpers/getContentId';

const getTrailers = async data => {
	const { ids, media_type } = getContentId(data);
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

