const getRandomContent = content => {
	const randomContent = Math.floor(
		Math.random() * Object.values(content).length
	);
	console.log(randomContent);

	return randomContent;
};

export default getRandomContent;

