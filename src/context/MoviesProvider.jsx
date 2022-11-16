import { createContext, useEffect, useState } from 'react';
import getNowPlaying from '../services/getNowPlaying';
import getOnAir from '../services/getOnTheAir';
import getPopularMovies from '../services/getPopularMovies';
import getPopularSeries from '../services/getPopularSeries';
import getTopRatedMovies from '../services/getTopRatedMovies';
import getTopRatedSeries from '../services/getTopRatedSeries';
import getTrendingAll from '../services/getTrendingAll';
import getTrendingMovies from '../services/getTrendingMovies';
import getTrendingSeries from '../services/getTrendingSeries';
import getUpcoming from '../services/getUpcoming';

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

	useEffect(() => {
		getTrendingMovies()
			.then(data => setTrendingMovies(data))
			.catch(error => console.log(error));

		getTrendingSeries()
			.then(data => setTrendingSeries(data))
			.catch(error => console.log(error));

		getTrendingAll()
			.then(data => setTrendingAll(data))
			.catch(error => console.log(error));

		getNowPlaying()
			.then(data => setNowPlaying(data))
			.catch(error => console.log(error));

		getUpcoming()
			.then(data => setUpcoming(data))
			.catch(error => console.log(error));

		getPopularMovies()
			.then(data => setPopularMovies(data))
			.catch(error => console.log(error));

		getPopularSeries()
			.then(data => setPopularSeries(data))
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

		return console.log('Render');
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
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
};

export { MoviesProvider };

export default MoviesContext;

