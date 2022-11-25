import TMDB from '../config/TMDB';
import filterPosters from '../helpers/filterPosters';

const searchContent = async search => {
	try {
		const {
			data: { results },
		} = await TMDB.api.get(TMDB.paths.search + '?query=' + search);
		return filterPosters(results);
	} catch (error) {
		return console.log(error);
	}
};

export default searchContent;

