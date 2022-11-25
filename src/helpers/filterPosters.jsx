const filterPosters = data => {
	const filtered = Object.values(data).filter(
		key => key.poster_path !== null && key.poster_path !== undefined
	);
	return filtered;
};

export default filterPosters;

