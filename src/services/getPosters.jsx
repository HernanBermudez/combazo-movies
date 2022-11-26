const getPosters = data => {
	const posters = Object.values(data).map(key => key.poster_path);
	posters.pop();
	const title = data.type;
	return { posters, title };
};

export default getPosters;

