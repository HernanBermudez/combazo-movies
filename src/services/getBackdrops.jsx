const getBackdrops = content => {
	const backdrops = Object.values(content).map(key => key.backdrop_path);
	backdrops.pop();
	console.log(backdrops);

	return backdrops;
};

export default getBackdrops;

