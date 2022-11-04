const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${
	import.meta.env.VITE_API_KEY
}`;

export default trendingUrl;

