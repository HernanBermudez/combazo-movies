import getContentId from '../helpers/getContentId';
import getTrailersInfo from './getTrailersInfo';

const getTrailers = async content => {
	const { id, type } = getContentId(content);
	const trailers = await getTrailersInfo(id, type);
	return trailers;
};

export default getTrailers;

