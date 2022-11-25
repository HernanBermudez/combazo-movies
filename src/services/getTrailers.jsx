import getContentId from '../helpers/getContentId';
import getTrailersInfo from '../helpers/getTrailersInfo';

const getTrailers = async content => {
	const { ids, type } = getContentId(content);
	console.log(ids);
	const trailers = await getTrailersInfo(ids, type);
	return trailers;
};

export default getTrailers;
