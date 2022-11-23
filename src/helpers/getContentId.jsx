const getContentId = content => {
	const type = content.type;
	const ids = Object.values(content).map(id => id.id);
	ids.pop();
	//.toString();
	return { ids, type };
};

export default getContentId;

