import TMDB from '../config/TMDB';

const searchContent = async search => {
	try {
		const { data } = await TMDB.api.get(TMDB.paths.search + '?query=' + search);
		//console.log(data.results);
		return data.results;
	} catch (error) {
		return console.log(error);
	}
};

export default searchContent;

