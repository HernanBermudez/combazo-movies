import TMDB from '../config/TMDB';

const searchContent = async search => {
	try {
		const {
			data: { results },
		} = await TMDB.api.get(TMDB.paths.search + '?query=' + search);
		results.filter(key => key.poster_path !== undefined);
		return results;
	} catch (error) {
		return console.log(error);
	}
};

export default searchContent;

