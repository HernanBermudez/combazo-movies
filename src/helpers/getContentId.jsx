const getContentId = content => {
	const type = content.type;
	const ids = Object.values(content).map(id => id.id);
	ids.pop();
	return { ids, type };
};

export default getContentId;

