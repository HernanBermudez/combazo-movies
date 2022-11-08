import axios from 'axios';

const TMDB = {
	api: axios.create({
		baseURL: 'https://api.themoviedb.org/3',
		timeout: 3000,
		timeoutErrorMessage: 'Timeout! Could not retrieve movies from API',
		params: {
			api_key: import.meta.env.VITE_API_KEY,
			language: 'es-ES',
			page: 1,
		},
	}),
	paths: {
		trending: {
			trending_day: '/trending/all/day',
			trending_week: '/trending/all/week',
			trending_movie_day: '/trending/movie/day',
			trending_movie_week: '/trending/movie/week',
			trending_tv_day: '/trending/tv/day',
			trending_tv_week: '/trending/tv/week',
			trending_person_day: '/trending/person/day',
			trending_person_week: '/trending/person/week',
		},
		movies: {
			popular: '/movie/popular',
			top_rated: '/movie/top_rated',
			latest: '/movie/latest',
		},
		series: {
			popular: '/tv/popular',
			top_rated: '/tv/top_rated',
			latest: '/tv/latest',
		},
	},
	images: {
		base_url: 'https://image.tmdb.org/t/p',
		sizes: {
			w92: '/w92',
			w154: '/w154',
			w185: '/w185',
			w342: 'w342',
			w500: '/w500',
			w700: '/w700',
			original: '/original',
		},
		backdrop: {
			w300: '/w300',
			w700: '/w700',
			w1280: '/w1280',
			original: '/original',
		},
	},
};

export default TMDB;

