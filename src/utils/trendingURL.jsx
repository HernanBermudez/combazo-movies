/*
	This endpoint contains all trending:
	
	media_type: {all, movie, tv, person}
	time_window: {day, week}
*/

const trendingUrlAll = `https://api.themoviedb.org/3/trending/all/day?api_key=${
	import.meta.env.VITE_API_KEY
}`;

const trendingUrlTv = `https://api.themoviedb.org/3/trending/movie/day?api_key=${
	import.meta.env.VITE_API_KEY
}`;

export { trendingUrlAll, trendingUrlTv };

