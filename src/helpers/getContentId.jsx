const getContentId = content => {
	const ids = Object.values(content).map(id => id.id);
	ids.pop();
	const type = Object.values(content).find(key => key.media_type);
	return { ids, type };
};

export default getContentId;

