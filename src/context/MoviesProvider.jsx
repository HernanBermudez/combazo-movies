import { createContext, useEffect, useState } from 'react';
import getNowPlaying from '../services/getNowPlaying';
import getOnAirToday from '../services/getOnAirToday';
import getOnAir from '../services/getOnAir';
import getPopularMovies from '../services/getPopularMovies';
import getPopularSeries from '../services/getPopularSeries';
import getTopRatedMovies from '../services/getTopRatedMovies';
import getTopRatedSeries from '../services/getTopRatedSeries';
import getTrendingAll from '../services/getTrendingAll';
import getTrendingMovies from '../services/getTrendingMovies';
import getTrendingSeries from '../services/getTrendingSeries';
import getUpcoming from '../services/getUpcoming';
import getTrailers from '../services/getTrailers';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
	const [trendingMovies, setTrendingMovies] = useState({});
	const [trendingSeries, setTrendingSeries] = useState({});
	const [trendingAll, setTrendingAll] = useState({});
	const [nowPlaying, setNowPlaying] = useState({});
	const [upcoming, setUpcoming] = useState({});
	const [topRatedMovies, setTopRatedMovies] = useState({});
	const [topRatedSeries, setTopRatedSeries] = useState({});
	const [popularMovies, setPopularMovies] = useState({});
	const [popularSeries, setPopularSeries] = useState({});
	const [onAir, setOnAir] = useState({});
	const [onAirToday, setOnAirToday] = useState({});
	const [search, setSearch] = useState({});
	const [trailersSeries, setTrailersSeries] = useState([]);
	const [trailersMovies, setTrailersMovies] = useState([]);

	useEffect(() => {
		getTrendingAll()
			.then(data => {
				setTrendingAll(data);
			})
			.catch(error => console.log(error));

		getPopularMovies()
			.then(data => {
				setPopularMovies(data);
			})
			.catch(error => console.log(error));

		getPopularSeries()
			.then(data => {
				setPopularSeries(data);
			})
			.catch(error => console.log(error));

		getTrendingMovies()
			.then(data => {
				setTrendingMovies(data);
				getTrailers(data).then(trailers => setTrailersMovies(trailers));
			})
			.catch(error => console.log(error));

		getTrendingSeries()
			.then(data => {
				setTrendingSeries(data);
				getTrailers(data).then(trailers => setTrailersSeries(trailers));
			})
			.catch(error => console.log(error));

		getNowPlaying()
			.then(data => setNowPlaying(data))
			.catch(error => console.log(error));

		getUpcoming()
			.then(data => setUpcoming(data))
			.catch(error => console.log(error));

		getTopRatedMovies()
			.then(data => setTopRatedMovies(data))
			.catch(error => console.log(error));

		getTopRatedSeries()
			.then(data => setTopRatedSeries(data))
			.catch(error => console.log(error));

		getOnAir()
			.then(data => setOnAir(data))
			.catch(error => console.log(error));

		getOnAirToday()
			.then(data => setOnAirToday(data))
			.catch(error => console.log(error));

		// getTrailers(trendingSeries)
		// 	.then(data => setTrailersSeries(data))
		// 	.catch(error => console.log(error));

		// getTrailers(trendingMovies)
		// 	.then(data => setTrailersMovies(data))
		// 	.catch(error => console.log(error));
	}, []);

	return (
		<MoviesContext.Provider
			value={{
				trendingMovies,
				trendingSeries,
				trendingAll,
				nowPlaying,
				upcoming,
				popularMovies,
				popularSeries,
				topRatedMovies,
				topRatedSeries,
				onAir,
				onAirToday,
				search,
				setSearch,
				trailersMovies,
				trailersSeries,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
};

export { MoviesProvider };

export default MoviesContext;

