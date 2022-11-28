const getContentId = content => {
	const ids = Object.values(content).map(id => id.id);
	ids.pop();
	const { media_type } = Object.values(content).find(key => key.media_type);
	console.log(media_type);
	return ids, media_type;
};

export default getContentId;

